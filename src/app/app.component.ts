import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { AuthService } from './auth/auth.service';
import { LoadSpinnerComponent } from './shared/load-spinner/load-spinner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, LoadSpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private authService = inject(AuthService);

  isAuthInitialized = this.authService.authReady;
  authLoading = this.authService.authLoading;
}
