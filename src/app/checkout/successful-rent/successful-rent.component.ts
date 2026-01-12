import { Component, inject, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CheckoutService } from '../checkout.service';
import { ProgressIndicatorComponent } from '../../shared/progress-indicator/progress-indicator.component';
import { contentFadeInOut } from '../../app.animations';

@Component({
  selector: 'app-successful-rent',
  standalone: true,
  imports: [FormsModule, ProgressIndicatorComponent],
  animations: [contentFadeInOut],
  templateUrl: './successful-rent.html',
  styleUrls: ['./successful-rent.css'],
})
export class SuccessfulRentComponent {
  private checkoutService = inject(CheckoutService);
  private router = inject(Router);

  rating = signal<number>(0);
  feedback = signal<string>('');

  selectedCar = this.checkoutService.selectedCar;
  tripDetails = this.checkoutService.tripDetails;
  totalAmount = this.checkoutService.totalAmount;
  userDetails = computed(() => this.checkoutService.selectedCar()?.user ?? null);

  setRating(star: number) {
    this.rating.set(star);
  }

  submitFeedback() {
    if (!this.feedback() && this.rating() === 0) {
      alert('Please provide a rating and feedback before submitting!');
      return;
    }
    const feedbackData = {
      rating: this.rating(),
      feedback: this.feedback(),
      car: this.selectedCar(),
      user: this.userDetails(),
    };

    console.log('User Feedback:', feedbackData);
    alert('Thank you for your feedback!');
    this.feedback.set('');
    this.rating.set(0);
  }

  backToHome() {
    this.router.navigate(['/discover']);
  }

  continueRenting() {
    this.router.navigate(['/fleet']);
  }

  isDoorDelivery(): boolean {
    const car = this.selectedCar()?.car;
    if (!car) return false;
    return car.deliveryType?.toLowerCase() === 'door delivery';
  }
}
