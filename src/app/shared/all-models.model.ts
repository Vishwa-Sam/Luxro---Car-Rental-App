import { CarModel } from './car.model';

export interface TripDetails {
  pickup: string;
  dropoff: string;
  startDate: string;
  endDate: string;
}

export interface UserDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  driverNeeded: boolean;
  documentFile: File | null;
  deliveryType: string;
}

export interface CheckoutPayload {
  firebaseId?: string;
  car: CarModel;
  trip: TripDetails;
  user?: UserDetails;
  pricing: {
    baseFare: number;
    discountedPrice: number;
    insurance: number;
    tax: number;
    extraFees: number;
    total: number;
  };
}
