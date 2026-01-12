import { Component, inject } from '@angular/core';
import { AuthService } from '../auth.service';
// import { sendEmailVerification } from '@angular/fire/auth'; 

@Component({
  selector: 'app-verify-email',
  imports: [],
  templateUrl: './verify-email.html',
  styleUrl: './verify-email.css',
})
export class VerifyEmailComponent {
  authService = inject(AuthService);
  /*
  async resendEmail() {
    const user = this.authService.user();
    if (!user) return;

    try {
      await sendEmailVerification(user);
      alert('Verification email re-sent!');
    } catch (err) {
      console.error('Failed to resend verification email:', err);
    }
  }
  */
}
