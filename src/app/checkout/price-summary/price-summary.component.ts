import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DecimalPipe } from '@angular/common';

import { CheckoutService } from '../checkout.service';

@Component({
  selector: 'app-price-summary',
  imports: [DecimalPipe],
  templateUrl: './price-summary.html',
  styleUrl: './price-summary.css',
})
export class PriceSummaryComponent {
  private checkoutService = inject(CheckoutService);

  car = this.checkoutService.selectedCar;
  basePrice = this.checkoutService.basePrice;
  insurance = this.checkoutService.insurance;
  extrafees = this.checkoutService.extraFees;
  taxAmount = this.checkoutService.taxAmount;
  discountedPrice = this.checkoutService.discountedPrice;
  discount = this.checkoutService.discount;
  totalAmount = this.checkoutService.totalAmount;

  private router = inject(Router);
  private routes = inject(ActivatedRoute);

  onCheckout() {
    this.router.navigate(['user-form'], { relativeTo: this.routes });
  }
}
