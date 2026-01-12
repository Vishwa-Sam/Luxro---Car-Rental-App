import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { HelpCategory, HelpDataService, HelpFaq } from './contact-data.service';
import { contentFadeInOut } from '../app.animations';

@Component({
  selector: 'app-contact-us',
  imports: [RouterLink],
  animations: [contentFadeInOut],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.css',
})
export class ContactUsComponent {
  private helpService = inject(HelpDataService);

  categories: HelpCategory[] = [];
  popularFaqs: HelpFaq[] = [];

  selectedCategory: HelpCategory | null = null;
  openFaqIndex: number | null = null;
  openPopularFaqIndex: number | null = null;

  constructor() {
    this.categories = this.helpService.getCategories();
    this.popularFaqs = this.helpService.getPopularFaqs();
  }

  selectCategory(category: HelpCategory) {
    this.selectedCategory = category;
    this.openFaqIndex = null;
  }

  goBack() {
    this.selectedCategory = null;
    this.openFaqIndex = null;
    this.openPopularFaqIndex = null;
  }

  toggleFaq(index: number) {
    this.openFaqIndex = this.openFaqIndex === index ? null : index;
  }

  togglePopularFaq(index: number) {
    this.openPopularFaqIndex = this.openPopularFaqIndex === index ? null : index;
  }
}
