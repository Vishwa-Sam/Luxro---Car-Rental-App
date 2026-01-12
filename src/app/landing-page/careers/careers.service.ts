import { Injectable } from '@angular/core';

export interface CareerBenefit {
  title: string;
  icon: string;
  description: string;
}

export interface ApplicantType {
  icon: string;
  title: string;
  description: string;
}

export interface LuxroValue {
  icon: string;
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class CareersService {
  private benefits: CareerBenefit[] = [
    {
      icon: '🚀',
      title: 'Fast-Growing Brand',
      description: `Luxro is a rapidly expanding premium car rental platform focused on
        quality, reliability, and customer satisfaction. Working with us means being
        part of a company that values innovation and execution.`,
    },
    {
      icon: '💻',
      title: 'Technology-Driven',
      description: `From real-time booking systems to secure payment flows, Luxro relies
        on modern technologies like Angular and Firebase to deliver seamless digital
        experiences.`,
    },
    {
      icon: '📈',
      title: 'Career Development',
      description: `We invest in our people by offering hands-on learning, mentorship,
        and opportunities to grow alongside the company.`,
    },
    {
      icon: '🤝',
      title: 'Collaborative Team',
      description: `At Luxro, collaboration is at the heart of everything we do. You’ll
      work with passionate, cross-functional teams that value open communication,
      mutual respect, and shared success.`,
    },
  ];

  private whoShouldApply: ApplicantType[] = [
    {
      icon: '🌱',
      title: 'Freshers & Interns',
      description: `If you are starting your career and eager to gain hands-on
      experience, Luxro provides an excellent environment to learn,
      experiment, and build meaningful projects.`,
    },
    {
      icon: '🧠',
      title: 'Experienced Professionals',
      description: `If you bring industry experience and are looking for a place
      where your ideas matter, Luxro offers the opportunity to make a real
      impact while growing professionally.`,
    },
  ];

  private values: LuxroValue[] = [
    {
      icon: '🤝',
      title: 'Customer First',
      description: `Everything we do at Luxro starts with the customer. From smooth booking
      experiences to well-maintained vehicles and responsive support, we aim to exceed
      expectations at every step of the journey.`,
    },
    {
      icon: '🔍',
      title: 'Ownership & Accountability',
      description: `We believe in taking responsibility for our work. Every team member at
      Luxro is encouraged to own problems, find solutions, and deliver results with
      integrity and pride.`,
    },
    {
      icon: '🚀',
      title: 'Continuous Improvement',
      description: `Luxro is built on a mindset of constant learning. We regularly review our
      processes, learn from feedback, and adapt quickly to improve both our product and
      ourselves.`,
    },
    {
      icon: '🌱',
      title: 'Sustainable Thinking',
      description: `We are committed to building Luxro responsibly. From encouraging
    eco-friendly travel choices to optimizing operations, we strive to create a
    positive impact on our communities and the environment.`,
    },
  ];

  getWhyJoinLuxro(): CareerBenefit[] {
    return this.benefits;
  }

  getWhoShouldApply(): ApplicantType[] {
    return this.whoShouldApply;
  }

  getLuxroValues(): LuxroValue[] {
    return this.values;
  }
}
