import { Component, computed, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

import { AuthService } from '../auth/auth.service';
import { LoadSpinnerComponent } from '../shared/load-spinner/load-spinner.component';
import { DropdownDirective } from '../shared/drop-down.directive';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, LoadSpinnerComponent, DropdownDirective],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  isLoggingOut = signal(false);

  isAuthenticated = computed(() => this.authService.isAuthenticated());
  authReady = this.authService.authReady;
  userName = computed(() => this.authService.user()?.displayName || 'User');

  async onLogout() {
    const confirmed = confirm('Are you sure you want to log out?');
    if (!confirmed) return;

    this.isLoggingOut.set(true);
    await this.authService.onLogout();
    this.isLoggingOut.set(false);
  }

  goToLogin() {
    this.router.navigate(['/authentication']);
  }
}
