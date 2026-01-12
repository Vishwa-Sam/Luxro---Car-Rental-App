import { Injectable } from '@angular/core';

export interface City {
  name: string;
  subtitle: string;
  image: string;
}

export interface CarCompany {
  image: string;
}

export interface Testimonial {
  image: string;
  name: string;
  location: string;
  stars: string;
  quote: string;
}

export interface LuxroFeature {
  icon: string;
  title: string;
  description: string;
  points: string[];
}

@Injectable({
  providedIn: 'root',
})
export class LandingDataService {
  private cityData: City[] = [
    {
      name: 'Bangalore',
      subtitle: 'Weekend getaways & tech city drives',
      image: '../../assets/Landing/bangalore.jpg',
    },
    {
      name: 'Delhi',
      subtitle: 'Urban travel & long highway journeys',
      image: '../../assets/Landing/Delhi.avif',
    },
    {
      name: 'Mumbai',
      subtitle: 'City traffic & scenic coastal escapes',
      image: '../../assets/Landing/Mumbai.avif',
    },
    {
      name: 'Hyderabad',
      subtitle: 'Historic routes & modern city drives',
      image: '../../assets/Landing/Hyderabad.avif',
    },
    {
      name: 'Chennai',
      subtitle: 'Beachside roads & cultural trips',
      image: '../../assets/Landing/chennai.jpg',
    },
    {
      name: 'Pune',
      subtitle: 'Hill drives & weekend road trips',
      image: '../../assets/Landing/Pune.avif',
    },
    {
      name: 'Kolkata',
      subtitle: 'Cultural city drives & heritage routes',
      image: '../../assets/Landing/Kolkata.avif',
    },
    {
      name: 'Ahmedabad',
      subtitle: 'Heritage city travel & highway drives',
      image: '../../assets/Landing/ahmadabad.jpg',
    },
    {
      name: 'Mysore',
      subtitle: 'Royal heritage & relaxed city travel',
      image: '../../assets/Landing/mysore.jpg',
    },
    {
      name: 'Kochi',
      subtitle: 'Backwater routes & coastal journeys',
      image: '../../assets/Landing/kochi.avif',
    },
    {
      name: 'Munnar',
      subtitle: 'Hill station drives & scenic escapes',
      image: '../../assets/Landing/moonar.jpg',
    },
    {
      name: 'Ooty',
      subtitle: 'Mountain roads & nature retreats',
      image: '../../assets/Landing/ooty.jpg',
    },
    {
      name: 'Coimbatore',
      subtitle: 'Gateway to hill stations & long drives',
      image: '../../assets/Landing/coimbatore.jpg',
    },
  ];

  private carData: CarCompany[] = [
    {
      image: '../../assets/Landing/car-logo/mbenz.png',
    },
    {
      image: '../../assets/Landing/car-logo/bmw.png',
    },
    {
      image: '../../assets/Landing/car-logo/audi.png',
    },
    {
      image: '../../assets/Landing/car-logo/honda.png',
    },
    {
      image: '../../assets/Landing/car-logo/Kia.png',
    },
    {
      image: '../../assets/Landing/car-logo/suzuki.png',
    },
    {
      image: '../../assets/Landing/car-logo/tata.png',
    },
    {
      image: '../../assets/Landing/car-logo/toyota.png',
    },
    {
      image: '../../assets/Landing/car-logo/hyundai.png',
    },
     {
      image: '../../assets/Landing/car-logo/Nissan.png',
    },
     {
      image: '../../assets/Landing/car-logo/range-rover.jpg',
    },
     {
      image: '../../assets/Landing/car-logo/skoda.webp',
    },
     {
      image: '../../assets/Landing/car-logo/testla.png',
    },
    {
      image: '../../assets/Landing/car-logo/volksvogan.png',
    },

  ];

  private testimonialData: Testimonial[] = [
     {
    image: '../../assets/Landing/test-3.png',
    name: 'Ananya Rao',
    location: 'Bangalore • Sep 2024',
    stars: '★★★★★',
    quote:
      'Luxro made my weekend getaway effortless. The car was clean, reliable, and pickup was super smooth. Perfect for spontaneous road trips.',
  },
  {
    image: '../../assets/Landing/test-2.png',
    name: 'Rohit Mehta',
    location: 'Mumbai • Aug 2024',
    stars: '★★★★☆',
    quote:
      'Booked a premium sedan for a business trip. Transparent pricing, no hidden charges, and excellent customer support throughout.',
  },
  {
    image: '../../assets/Landing/test-1.png',
    name: 'Sneha Iyer',
    location: 'Chennai • Jul 2024',
    stars: '★★★★★',
    quote:
      'Loved how easy it was to find and book a car. The vehicle felt almost brand new, and the return process was quick and stress-free.',
  },
  ];

  private features: LuxroFeature[] = [
    {
      icon: '🚗',
      title: 'Premium Quality Cars',
      description:
        'Every vehicle is thoroughly inspected and maintained to ensure a smooth, worry-free driving experience.',
      points: [
        'Professionally serviced vehicles',
        'Clean interiors & safety checked',
        'Wide range of premium models',
      ],
    },
    {
      icon: '💰',
      title: 'Transparent Pricing',
      description: 'What you see is what you pay. No surprises, no hidden fees.',
      points: ['Clear daily pricing', 'No hidden charges', 'Upfront insurance details'],
    },
    {
      icon: '🔐',
      title: 'Secure & Trusted Platform',
      description: 'We prioritize safety for both renters and hosts with industry-grade security.',
      points: ['Verified users & hosts', 'Secure online payments', 'Booking protection'],
    },
    {
      icon: '🕒',
      title: '24/7 Customer Support',
      description: 'Day or night, our support team is always available to assist you.',
      points: ['Instant booking help', 'Roadside assistance', 'Dedicated support team'],
    },
  ];

  getCitydata(): City[] {
    return this.cityData;
  }

  getCardata(): CarCompany[] {
    return this.carData;
  }

  getTestimonialData(): Testimonial[] {
    return this.testimonialData;
  }

  getFeatures(): LuxroFeature[] {
    return this.features;
  }
}
