// import { Injectable, signal } from '@angular/core';
// import { CarModel } from '../shared/car.model';
// import { UserDetails } from '../shared/all-models.model';


// @Injectable({ providedIn: 'root' })
// export class SuccessfulRentService {
//   private userDetailsSignal = signal<UserDetails | null>(null);
//   private selectedCarSignal = signal<CarModel | null>(null);

//   userDetails = this.userDetailsSignal; // expose directly
//   selectedCar = this.selectedCarSignal; // expose directly

//   setSelectedCar(car: CarModel) {
//     this.selectedCarSignal.set(car);
//   }

//   // ---------- USER DETAILS ----------
//   setUserDetails(details: UserDetails) {
//     this.userDetailsSignal.set(details);
//   }

//   getDeliveryType(): string {
//     return (
//       this.userDetailsSignal()?.deliveryType ??
//       this.selectedCarSignal()?.deliveryType ??
//       'Self Pickup'
//     );
//   }
// }
