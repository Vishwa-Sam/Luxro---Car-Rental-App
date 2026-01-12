import { computed, Injectable, signal, inject } from '@angular/core';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  User,
} from 'firebase/auth';
import { Router } from '@angular/router';
import { auth } from '../../firebase';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _user = signal<User | null>(null);
  private router = inject(Router);
  authReady = signal(false);

  authLoading = signal(false);

  user = computed(() => this._user());
  isAuthenticated = computed(() => !!this.user());
  userName = computed(() => this._user()?.displayName ?? null);

  constructor() {
    onAuthStateChanged(auth, (user) => {
      this._user.set(user);
      this.authReady.set(true);

      this.authLoading.set(false);
    });
  }
  // Email- Verification
  // isEmailVerified = computed(() => this._user()?.emailVerified ?? false);
  // get verificationNeeded() {
  //   return this.isAuthenticated() && !this.isEmailVerified();
  // }

  onSignup(email: string, password: string, name: string) {
    this.authLoading.set(true);

    return createUserWithEmailAndPassword(auth, email, password)
      .then(async (cred) => {
        if (cred.user) {
          await updateProfile(cred.user, { displayName: name });
        }
        return cred;
      })
      .catch((err) => {
        this.authLoading.set(false);
        throw err;
      });
    // for Email- Verification
    //  .then(async (cred) => {
    // if (cred.user) {
    //   await sendEmailVerification(cred.user);
    //   console.log('Verification email sent!');
    //   return cred;
    // });
  }

  onLogin(email: string, password: string) {
    this.authLoading.set(true);

    return signInWithEmailAndPassword(auth, email, password).catch((err) => {
      this.authLoading.set(false);
      throw err;
    });
    // REFRESH USER TO CHECK VERIFICATION STATUS
    //  .then(async (cred) => {
    // if (cred.user) {
    //   await reload(cred.user);  // Refreshes emailVerified status
    // }
    //   return cred;
    // });
  }

  onLogout() {
    this.authLoading.set(true);

    return signOut(auth).then(() => {
      this.router.navigate(['/authentication']);
      this.authLoading.set(false);
    });
  }
}
