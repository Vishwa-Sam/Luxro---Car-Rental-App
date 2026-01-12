import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JobApplication, JobRole } from './careers.model';
import { ApplicationStorageService } from './success/applicationStorage.service';
import { Router, RouterOutlet } from "@angular/router";
import { ApplicantType, CareerBenefit, CareersService, LuxroValue } from './careers.service';
import { contentFadeInOut } from '../../app.animations';

@Component({
  selector: 'app-careers',
  imports: [FormsModule, RouterOutlet],
  animations:[contentFadeInOut],
  templateUrl: './careers.html',
  styleUrl: './careers.css',
})
export class CareersComponent implements OnInit {
  // UI state
  showForm = false;
  showSuccess = false;

  selectedRole: JobRole | null = null;
  application!: JobApplication;
  luxroBenefits: CareerBenefit[] = [];
  whoShouldApply: ApplicantType[] = [];
  luxroValues : LuxroValue[] = [];

  // Fake job roles
  jobs: JobRole[] = [
    {
      id: 'frontend',
      title: 'Frontend Developer (Angular)',
      location: 'Remote',
      type: 'Full-time / Internship',
      description: 'Build modern Angular applications with real-time features.',
    },
    {
      id: 'backend',
      title: 'Backend / Firebase Engineer',
      location: 'Remote',
      type: 'Full-time',
      description: 'Design secure Firebase databases and backend logic.',
    },
    {
      id: 'designer',
      title: 'UI / UX Designer',
      location: 'Remote',
      type: 'Part-time',
      description: 'Design clean, user-friendly car rental experiences.',
    },
    {
      id: 'receptionist',
      title: 'Receptionist',
      location: 'On-site',
      type: 'Full-time',
      description: 'Handle customer inquiries and front-desk operations.',
    },
    {
      id: 'mechanic',
      title: 'Car Mechanic',
      location: 'On-site',
      type: 'Full-time',
      description: 'Maintain and inspect rental vehicles.',
    },
    {
      id: 'support',
      title: 'Customer Support Executive',
      location: 'Remote / On-site',
      type: 'Shift-based',
      description: 'Assist customers with bookings and issues.',
    },
    {
  id: 'driver',
  title: 'Car Driver',
  location: 'On-site',
  type: 'Full-time',
  description: 'Safely operate and maintain company vehicles while delivering excellent customer service to Luxro customers.',
},
{
  id: 'accountant',
  title: 'Accountant',
  location: 'On-site',
  type: 'Full-time',
  description: 'Manage financial records, track expenses and revenues, and ensure compliance with accounting standards.',
},
{
  id: 'call-support',
  title: 'Call-Support Executive',
  location: 'Remote / On-site',
  type: 'Shift-based',
  description: 'Handle customer inquiries, resolve issues efficiently, and provide a smooth support experience across calls and chats.',
},
  ];

  faqs = [
  {
    question: 'Do I need prior experience in the car rental industry?',
    answer:
      'Not necessarily. While industry experience is helpful for some roles, Luxro values problem-solving skills, adaptability, and a strong willingness to learn.',
  },
  {
    question: 'Are remote roles available at Luxro?',
    answer:
      'Yes. Many of our technical and customer support roles offer remote or hybrid work options, depending on the role and operational needs.',
  },
  {
    question: 'What does the hiring process look like?',
    answer:
      'Our hiring process typically includes an application review, one or more interviews, and a role-specific assessment. We aim to keep the process transparent and respectful of your time.',
  },
  {
    question: 'Can freshers or interns apply?',
    answer:
      'Absolutely. Luxro actively encourages freshers and interns to apply. We believe in mentoring talent and providing hands-on learning opportunities.',
  },
  {
    question: 'When will I hear back after applying?',
    answer:
      'Applications are reviewed on a rolling basis. If your profile matches our requirements, you can expect to hear from us within a few business days.',
  },
];


  // careers.component.ts (add inside the class)

  constructor(private storage: ApplicationStorageService, private router: Router, private careersService: CareersService) {}
      ngOnInit() {
        this.luxroBenefits = this.careersService.getWhyJoinLuxro();
        this.whoShouldApply = this.careersService.getWhoShouldApply();
        this.luxroValues = this.careersService.getLuxroValues();
      }



  openFaqIndex: number | null = null;

  toggleFaq(index: number) {
    this.openFaqIndex = this.openFaqIndex === index ? null : index;
  }

  applyForJob(job: JobRole) {
    this.selectedRole = job;
    this.showForm = true;
    this.showSuccess = false;

    this.application = {
      fullName: '',
      email: '',
      phone: '',
      address: '',
      experience: '',
      expectedSalary: '',
      reasonToHire: '',
      resume: null,

      role: job.title,
      appliedAt: '',
    };
  }

  onResumeUpload(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.application.resume = input.files[0];
    }
  }

  onSubmit() {
  this.storage.save(this.application);
  this.router.navigate(['/careers/success']);
  this.showForm = false;
}

  reset() {
    this.showForm = false;
    this.showSuccess = false;
    this.selectedRole = null;
  }
}
