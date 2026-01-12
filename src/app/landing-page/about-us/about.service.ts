import { Injectable } from '@angular/core';

export interface SolutionCard {
  title: string;
  description: string;
}

export interface MissionVision {
  title: string;
  description: string[];
  image: string;
}

export interface HowItWorksStep {
  title: string;
  description: string;
}

export interface CoreValue {
  title: string;
  description: string;
}

export interface Problem {
  content: string;
}

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  private solutions: SolutionCard[] = [
    {
      title: 'Self-Drive Rentals',
      description:
        'Flexible, on-demand car rentals that give users complete control over their journey, with no drivers and no long-term commitments.',
    },
    {
      title: 'Verified Platform',
      description:
        'A trusted ecosystem with secure user and vehicle verification, designed to ensure safety, transparency, and confidence for every trip.',
    },
    {
      title: 'Host-Friendly',
      description:
        'A seamless hosting experience that empowers car owners to earn extra income through flexible listings, smart pricing, and full control.',
    },
    {
      title: 'Tech-First',
      description:
        'A modern, technology-driven platform offering smooth bookings, secure payments, and real-time support for a hassle-free experience.',
    },
  ];

  private data: MissionVision[] = [
    {
      title: 'Our Mission',
      description: [
        'Our mission at Luxro is to redefine urban mobility by making premium, self-drive car rentals accessible, reliable, and transparent for everyone.',
        'We focus on eliminating the friction of traditional car rentals through intuitive technology, thoughtful design, and seamless digital experiences that put users first.',
        'By building trust at every touchpoint, we aim to empower both renters and hosts with a platform that is safe, flexible, and designed for modern lifestyles.',
      ],
      image: '../../../assets/mission.png',
    },
    {
      title: 'Our Vision',
      description: [
        'We envision a future where access to a car is as effortless as booking a ride — without the burdens of ownership, long-term commitments, or unnecessary complexity.',
        'Luxro strives to create a shared mobility ecosystem where underutilized vehicles are transformed into meaningful opportunities for owners and convenient solutions for users.',
        'Our long-term vision is to shape smarter cities through sustainable mobility, enabling stress-free journeys while maximizing efficiency, trust, and value for everyone.',
      ],
      image: '../../../assets/vision.jpg',
    },
  ];

  private worksSteps: HowItWorksStep[] = [
    {
      title: 'Discover & Book',
      description:
        'Users browse a wide range of verified vehicles and book cars instantly through our intuitive digital platform.',
    },
    {
      title: 'Drive with Confidence',
      description:
        'Every Luxro trip is backed by secure payments, dedicated customer support, and transparent pricing with no hidden charges.',
    },
    {
      title: 'Earn as a Host',
      description:
        'Car owners list their vehicles on Luxro and earn passive income while maintaining full control over availability and pricing.',
    },
  ];

  private values: CoreValue[] = [
    {
      title: 'Customer First',
      description: 'Every decision we make is driven by customer experience and trust.',
    },
    {
      title: 'Trust & Transparency',
      description: 'Clear pricing, honest policies, and open communication.',
    },
    {
      title: 'Ownership',
      description: 'We take responsibility for outcomes, not just tasks.',
    },
    {
      title: 'Innovation',
      description: 'Continuous improvement through technology and feedback.',
    },
    {
      title: 'Sustainability',
      description: 'Promoting shared mobility for a greener future.',
    },
  ];
  
  private problem: Problem[] = [
     {
    content: `Traditional car rental systems are often rigid, expensive, and designed
    with limited flexibility in mind. Customers face long queues, complex
    paperwork, hidden charges, and restrictive policies that make renting a
    car more stressful than convenient.`
  },
  {
    content: `At the same time, car ownership comes with significant financial burden.
    Vehicles remain idle for most of their lifespan while owners continue to
    pay for insurance, maintenance, depreciation, and parking. Despite this,
    most car owners lack a secure and trusted way to monetize their vehicles
    when they are not in use.`
  },
  {
    content: `This imbalance creates a broken ecosystem—renters overpay for limited
    options, while owners miss out on earning opportunities. The lack of
    transparency, inconsistent vehicle quality, and poor trust mechanisms
    further widen this gap.`
  },
  {
    content: `Luxro was created to bridge this gap using technology, transparency, and
    trust. By enabling seamless peer-to-peer car sharing, Luxro empowers
    renters with flexible, affordable mobility and helps car owners turn idle
    vehicles into reliable income—creating a smarter, more sustainable way to move.`
  }
  ]

  getSolutions(): SolutionCard[] {
    return this.solutions;
  }

  getMissionVision(): MissionVision[] {
    return this.data;
  }

  getSteps(): HowItWorksStep[] {
    return this.worksSteps;
  }

  getCoreValues(): CoreValue[] {
    return this.values;
  }

  getProblemContent(): Problem[] {
    return this.problem;
  } 
}
