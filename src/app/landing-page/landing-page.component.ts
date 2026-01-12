import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { CarCompany, City, LandingDataService, LuxroFeature, Testimonial } from './landing.service';


@Component({
  selector: 'app-landing-page',
  imports: [RouterLink],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPageComponent implements OnInit{
  private router = inject(Router);
  private authService = inject(AuthService);
  private LandingService = inject(LandingDataService);

  cityData: City[] = [];
  carData: CarCompany[] = [];
  testimonialData: Testimonial[] = [];
  features: LuxroFeature[] = [] 

  ngOnInit() {
    this.cityData = this.LandingService.getCitydata();
    this.carData = this.LandingService.getCardata();
    this.testimonialData = this.LandingService.getTestimonialData();
    this.features = this.LandingService.getFeatures();
  }

  @ViewChild('scrollContainer', { static: false })
  scrollContainer!: ElementRef<HTMLDivElement>;

  onExploreFleet() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/fleet']);
    } else {
      this.router.navigate(['/authentication']);
    }
  }

  onBecomeHost() {
    this.router.navigate(['/partner']);
  }

  onCareers() {
    this.router.navigate(['/careers'])
  }

  scrollLeft() {
    this.scrollContainer.nativeElement.scrollBy({
      left: -300,
      behavior: 'smooth',
    });
  }

  scrollRight() {
    this.scrollContainer.nativeElement.scrollBy({
      left: 300,
      behavior: 'smooth',
    });
  }
}
