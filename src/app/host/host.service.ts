import { Injectable } from '@angular/core';
import { HostBenefit, HostFaq } from './host.model';

@Injectable({ providedIn: 'root' })
export class HostDataService {
  faqs: HostFaq[] = [
    {
      question: 'Is my car safe on Luxro?',
      answer:
        'Yes, every booking on Luxro is fully insured, and all drivers go through a strict verification process. Your vehicle is protected throughout the rental period.',
    },
    {
      question: 'How do I get paid?',
      answer:
        'Your earnings are securely credited directly to your registered bank account. Payouts are processed automatically and on time after each completed booking.',
    },
    {
      question: 'Can I block dates?',
      answer:
        'Absolutely. You have complete control over your car’s availability and can block or unblock dates anytime through your dashboard.',
    },
    {
      question: 'What documents are required to list my car?',
      answer:
        'To list your car, you need valid registration papers, active insurance, and basic KYC documents. The verification process is quick and hassle-free.',
    },
    {
      question: 'Who handles vehicle maintenance?',
      answer:
        'You continue to manage regular maintenance, while Luxro provides support for usage-related concerns during active bookings.',
    },
    {
      question: 'Is there a minimum commitment period?',
      answer:
        'No, there is no minimum commitment. You are free to list or remove your car whenever you want, with no penalties or long-term obligations.',
    },
    {
      question: 'What happens in case of an accident?',
      answer:
        'In the rare event of an accident, Luxro’s insurance coverage and dedicated support team assist you through the entire resolution process.',
    },
    {
      question: 'How is the rental price decided?',
      answer:
        'Rental prices are dynamically suggested based on factors like demand, location, season, and car type, helping you maximize earnings.',
    },
  ];

  private hostBenefits: HostBenefit[] = [
    {
      icon: '💰',
      title: 'Passive Income',
      description: 'Turn your idle car into a reliable monthly income source.',
      points: ['Earn even when not driving', 'Transparent payouts', 'High demand locations'],
    },
    {
      icon: '🎛️',
      title: 'Full Control',
      description: 'You decide when, how, and at what price to host.',
      points: ['Set availability', 'Flexible pricing', 'Pause anytime'],
    },
    {
      icon: '🛡️',
      title: 'Insurance & Safety',
      description: 'Every trip is protected with verified drivers.',
      points: ['Trip insurance included', 'Driver KYC checks', '24/7 support'],
    },
    {
      icon: '⚡',
      title: 'Zero Hassle',
      description: 'Luxro handles bookings, payments, and customer care.',
      points: ['No paperwork', 'Automated payments', 'Dedicated support team'],
    },
  ];

  getHostBenefits(): HostBenefit[] {
    return this.hostBenefits;
  }
}
