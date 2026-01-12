import { Component, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';
import { LoadSpinnerComponent } from '../shared/load-spinner/load-spinner.component';

@Component({
  selector: 'app-auth',
  imports: [FormsModule, LoadSpinnerComponent],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class AuthComponent {
  isLoginPage = true;

  isLoading = signal(false);
  password = signal('');
  confirmPassword = signal('');
  passwordsMatch = true;

  errorMessage = signal('');
  toastMessage = signal('');
  showToast = signal(false);

  private authService = inject(AuthService);
  private router = inject(Router);

  onSwitchPage() {
    this.isLoginPage = !this.isLoginPage;
    this.errorMessage.set('');
    this.password.set('');
    this.confirmPassword.set('');
    this.passwordsMatch = true;
  }

  isPasswordsMatch(password: string, confirm: string) {
    this.passwordsMatch = password === confirm;
  }

  showSuccessToast(message: string) {
    this.toastMessage.set(message);
    this.showToast.set(true);

    setTimeout(() => {
      this.showToast.set(false);
      this.router.navigate(['/fleet']);
    }, 2000);
  }

  setErrorMessages(code: string): string {
    const map: Record<string, string> = {
      'auth/invalid-email': 'The email address is invalid.',
      'auth/missing-email': 'Please enter your email.',
      'auth/missing-password': 'Please enter your password.',
      'auth/wrong-password': 'Incorrect password.',
      'auth/user-not-found': 'No user found with this email.',
      'auth/user-disabled': 'This account has been disabled.',
      'auth/email-already-in-use': 'This email is already registered.',
      'auth/weak-password': 'Password is too weak. Use 6+ characters.',
      'auth/too-many-requests': 'Too many attempts. Try again later.',
      'auth/network-request-failed': 'Network error. Check your connection.',
      'auth/invalid-credential': 'Invalid login credentials.',
    };

    return map[code] || 'Authentication failed. Please try again.';
  }

  onCloseError() {
    this.errorMessage.set('');
  }

  async onSubmit(form: NgForm) {
    if (!form.valid) return;

    this.isLoading.set(true);
    this.errorMessage.set('');

    const { email, name, password, confirmPassword } = form.value;

    if (!this.isLoginPage && password !== confirmPassword) {
      this.errorMessage.set('Passwords do not match.');
      this.isLoading.set(false);
      return;
    }

    try {
      if (this.isLoginPage) {
        await this.authService.onLogin(email, password);
        this.showSuccessToast('Login Successful!');
        setTimeout(() => {
          this.showToast.set(false);
          this.router.navigate(['/fleet']);
        }, 2000);
      } else {
        await this.authService.onSignup(email, password, name);
        this.showSuccessToast('Account Created Successfully!');
        setTimeout(() => {
          this.showToast.set(false);
          this.router.navigate(['/fleet']);
        }, 2000);
        // Redirect to verify-email page
        // this.router.navigate(['/verify-email']);
      }

      form.reset();
      this.password.set('');
      this.confirmPassword.set('');
      this.passwordsMatch = true;
    } catch (err: any) {
      const code = err.code ?? 'auth/unknown';
      this.errorMessage.set(this.setErrorMessages(code));
    }

    this.isLoading.set(false);
  }
}
