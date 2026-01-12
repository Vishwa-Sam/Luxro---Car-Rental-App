import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth/auth.service';
import { HostDataService } from './host.service';
import { HostBenefit } from './host.model';
import { contentFadeInOut } from '../app.animations';

@Component({
  selector: 'app-host',
  imports: [FormsModule],
  animations: [contentFadeInOut],
  templateUrl: './host.component.html',
  styleUrl: './host.component.css',
})
export class HostComponent implements OnInit {
  private router = inject(Router);
  private auth = inject(AuthService);
  private hostService = inject(HostDataService);

  faqs = this.hostService.faqs;
  hostbenefits: HostBenefit[] = [];

  ngOnInit() {
    this.hostbenefits = this.hostService.getHostBenefits();
  }

  selectedCar = 'Hyundai';
  selectedCity = 'Bangalore';
  cityBasePrice: Record<string, number> = {
    Bangalore: 22000,
    Delhi: 21000,
    Mumbai: 24000,
    Chennai: 19000,
    Pune: 20000,
    Hyderabad: 19500,
    Ahmedabad: 18000,
    Kochi: 17500,
    Thiruvananthapuram: 17000,
    Coimbatore: 16500,
    Ooty: 16000,
    Goa: 23000,
  };

  carBrandMultiplier: Record<string, number> = {
    BMW: 1.6,
    'Mercedes-Benz': 1.6,
    'Range Rover': 1.7,
    Audi: 1.5,
    Tesla: 1.8,

    Toyota: 1.2,
    Honda: 1.15,
    Škoda: 1.15,
    Hyundai: 1.1,
    Kia: 1.1,
    Nissan: 1.05,
    Tata: 1.0,
    Mahindra: 1.0,
    'Maruti Suzuki': 0.95,
  };

  estimatedEarning = 0;

  openFaqIndex: number | null = null;

  register() {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['/authentication']);
    } else {
      this.router.navigate(['/partner/register']);
    }
  }

  calculate() {
    const cityPrice = this.cityBasePrice[this.selectedCity] || 15000;
    const brandMultiplier = this.carBrandMultiplier[this.selectedCar] || 1;

    this.estimatedEarning = Math.round(cityPrice * brandMultiplier);
  }

  toggleFaq(i: number) {
    this.openFaqIndex = this.openFaqIndex === i ? null : i;
  }
}
