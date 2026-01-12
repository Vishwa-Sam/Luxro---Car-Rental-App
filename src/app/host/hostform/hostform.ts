import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { HostApplication } from './hostForm.model';

@Component({
  selector: 'app-hostform',
  imports: [FormsModule],
  templateUrl: './hostform.html',
  styleUrl: './hostform.css',
})
export class HostformComponent {
  application: HostApplication = {
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    govtIdFile: null,
    carName: '',
    carModel: '',
    mileage: '',
    submittedAt: '',
  };

  private router = inject(Router);

  onGovtIdUpload(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.application.govtIdFile = input.files[0];
    }
  }

  submitForm() {
    this.application.submittedAt = new Date().toISOString();

    const existing = JSON.parse(localStorage.getItem('luxro-host-applications') || '[]');

    existing.push(this.application);

    localStorage.setItem('luxro-host-applications', JSON.stringify(existing));

    this.router.navigate(['/partner/success']);
  }
}
