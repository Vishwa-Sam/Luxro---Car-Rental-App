import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AuthService } from '../../auth/auth.service';
import {
  AboutService,
  CoreValue,
  HowItWorksStep,
  MissionVision,
  Problem,
  SolutionCard,
} from './about.service';
import { contentFadeInOut } from '../../app.animations';

@Component({
  selector: 'app-about-us',
  imports: [CommonModule],
  animations: [contentFadeInOut],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css',
})
export class AboutUsComponent implements OnInit {
  private authService = inject(AuthService);
  private aboutSService = inject(AboutService);
  private router = inject(Router);

  solutions: SolutionCard[] = [];
  missionVision: MissionVision[] = [];
  howWorksSteps: HowItWorksStep[] = [];
  coreValues: CoreValue[] = [];
  problem: Problem[] = [];

  ngOnInit() {
    this.solutions = this.aboutSService.getSolutions();
    this.missionVision = this.aboutSService.getMissionVision();
    this.howWorksSteps = this.aboutSService.getSteps();
    this.coreValues = this.aboutSService.getCoreValues();
    this.problem = this.aboutSService.getProblemContent();
  }

  onNavtoFleet() {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/authentication']);
    } else {
      this.router.navigate(['/fleet']);
    }
  }

  onNavtoHost() {
    this.router.navigate(['/partner']);
  }
}
