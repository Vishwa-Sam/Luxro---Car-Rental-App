import { Injectable } from '@angular/core';

export interface FAQItem {
  question: string;
  answer: string;
}

@Injectable({ providedIn: 'root' })
export class CheckoutDataService {
  private faqData: FAQItem[] = [
    {
      question: 'What documents are required?',
      answer:
        'You must provide a valid driving license that has been active for the legally required duration, along with a government-issued photo ID such as an Aadhaar card, passport, or voter ID. Both documents must be original and will be verified before vehicle handover.',
    },
    {
      question: 'Is fuel included?',
      answer:
        'Fuel is not included in the rental cost. The vehicle will be provided with a certain fuel level, and you are required to return it with the same fuel level. Any fuel shortage at the time of return may result in additional charges.',
    },
    {
      question: 'What if I cancel late?',
      answer:
        'Cancellation charges depend on how close the cancellation is to the trip start date. Early cancellations are eligible for higher refunds, while last-minute cancellations may result in minimal or no refund. Please refer to the cancellation policy for exact refund slabs.',
    },
    {
      question: 'Is there a security deposit?',
      answer:
        'Yes, a refundable security deposit is required before the trip begins. The amount depends on the vehicle category and will be refunded within a specified time after the vehicle is returned, provided there are no damages, fines, or policy violations.',
    },
    {
      question: 'Can I extend my booking duration?',
      answer:
        'Booking extensions are allowed based on vehicle availability. You must request an extension before your current booking ends. Additional charges will apply, and failure to inform us may result in late return penalties.',
    },
  ];

  getFaqData(): FAQItem[] {
    return this.faqData;
  }
}
