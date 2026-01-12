import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { CheckoutService } from './checkout.service';
import { PriceSummaryComponent } from './price-summary/price-summary.component';
import { CarCardComponent } from './car-card/car-card.component';
import { EditTripComponent } from './edit-trip/edit-trip.component';
import { ProgressIndicatorComponent } from '../shared/progress-indicator/progress-indicator.component';
import { DataStorageService } from '../shared/data-storage.service';
import { CheckoutPayload } from '../shared/all-models.model';
import { LoadSpinnerComponent } from '../shared/load-spinner/load-spinner.component';
import { CheckoutDataService, FAQItem } from './checkout-Data.service';
import { AlertMessageCompoent } from '../shared/alert-message/alert-message.component';

@Component({
  selector: 'app-checkout',
  imports: [
    PriceSummaryComponent,
    CarCardComponent,
    EditTripComponent,
    RouterOutlet,
    ProgressIndicatorComponent,
    LoadSpinnerComponent,
    AlertMessageCompoent,
  ],
  templateUrl: './checkout.html',
  styleUrls: ['./checkout.css'],
})
export class CheckoutComponent implements OnInit {
  private checkoutService = inject(CheckoutService);
  private dataBaseService = inject(DataStorageService);
  private faqDataService = inject(CheckoutDataService);
  private router = inject(Router);

  selectedCar = this.checkoutService.selectedCar;
  tripDetails = this.checkoutService.tripDetails;
  isLoading = this.checkoutService.isLoading;
  faqs: FAQItem[] = [];

  alertType: 'success' | 'info' | 'warning' | 'error' | null = null;
  alertMessage = '';

  private showAlert(
    type: 'success' | 'info' | 'warning' | 'error',
    message: string,
    timeout = 3000
  ) {
    this.alertType = type;
    this.alertMessage = message;

    setTimeout(() => {
      this.alertType = null;
      this.alertMessage = '';
    }, timeout);
  }

  ngOnInit() {
    this.checkoutService.isLoading.set(true);
    this.dataBaseService
      .fetchCheckoutCars()
      .catch((err) => console.error('Failed to load checkout cars', err));

    this.faqs = this.faqDataService.getFaqData();
  }

  onDelete(payload: CheckoutPayload | null) {
    if (!payload?.firebaseId) {
      this.showAlert('info', 'No car found to remove from checkout.');
      return;
    }

    const firebaseId = payload.firebaseId;

    this.showAlert('success', 'Car removed from checkout.');

    setTimeout(() => {
      this.checkoutService.deleteFromCheckout();

      this.dataBaseService.removeCheckoutCars(firebaseId).catch((err) => {
        console.error('Failed to remove checkout car', err);
        this.showAlert('error', 'Failed to remove car from checkout.');
      });
    }, 0);
  }

  isChildRouteActive(): boolean {
    return this.router.url.includes('user-form') || this.router.url.includes('successful-rent');
  }

  onTripUpdated(status: 'success' | 'error') {
    if (status === 'success') {
      this.showAlert('success', 'Trip details saved successfully!');
    } else {
      this.showAlert('error', 'Failed to save trip details.');
    }
  }
}
