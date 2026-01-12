import { DatePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { JobApplication } from '../careers.model';
import { contentFadeInOut } from '../../../app.animations';

@Component({
  selector: 'app-success',
  imports: [DatePipe],
  animations: [contentFadeInOut],
  templateUrl: './success.html',
  styleUrl: './success.css',
})
export class Success implements OnInit {
  application!: JobApplication | null;
  private router = inject(Router);

  ngOnInit(): void {
    const raw = localStorage.getItem('luxro-job-applications');

    if (!raw) {
      this.router.navigate(['/careers']);
      return;
    }

    const applications: JobApplication[] = JSON.parse(raw);
    this.application = applications[applications.length - 1];
  }

  onNavigateTo() {
    localStorage.removeItem('luxro-job-applications');
    this.router.navigate(['/careers']);
  }
}
