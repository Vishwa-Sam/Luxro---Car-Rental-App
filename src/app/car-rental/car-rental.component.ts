import { Component, computed, effect, inject, PLATFORM_ID, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';

import { CarListComponent } from './car-list/car-list.component';
import { CarRentalService } from './car-rental.service';
import { TripDetailsComponent } from './trip-details/trip-details.component';
import { CarFilterComponent, SideFilterChange } from './car-filter/car-filter.component';
import { QuickFilterComponent } from './quick-filter/quick-filter.component';
import { SearchService } from '../shared/search.service';
import { CarModel } from '../shared/car.model';

@Component({
  selector: 'app-car-rental',
  imports: [
    CarListComponent,
    RouterOutlet,
    TripDetailsComponent,
    CarFilterComponent,
    QuickFilterComponent,
    FormsModule,
  ],
  templateUrl: './car-rental.html',
  styleUrl: './car-rental.css',
})
export class CarRentalComponent {
  isDetailOpen = signal(false);
  searchInput = '';
  activeQuickFilter = signal<string | null>(null);
  clearCheckbox = signal(0);
  sideFilters = signal<{
    modelYear?: { min: number; max: number }[];
    transmission?: string[];
    fuelType?: string[];
    carType?: string[];
    deliveryType?: string[];
    seater?: string[];
    ratings?: { min: number; max: number }[];
    luxury?: boolean;
    price?: { min: number; max: number }[];
  }>({});

  private carRentalService = inject(CarRentalService);
  private searchService = inject(SearchService);
  private router = inject(Router);
  private routes = inject(ActivatedRoute);
  private platformId = inject(PLATFORM_ID);

  allCars = this.carRentalService.getCarSignal();

  // constructor() {
  //   this.router.events.pipe(filter((page) => page instanceof NavigationEnd)).subscribe(() => {
  //     this.isDetailOpen.set(this.router.url.includes('/cars/'));
  //   });
  // }

  private readonly _scrollLockEffect = effect(() => {
    if (!isPlatformBrowser(this.platformId)) return;

    if (this.isDetailOpen()) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  });

  constructor() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isDetailOpen.set(this.router.url.includes('(detail:cars/'));
      }
    });
  }

  closeDetail() {
    this.router.navigate([{ outlets: { detail: null } }], {
      relativeTo: this.routes,
    });
  }

  filteredCars = computed(() => {
    const cars = this.allCars();
    const quickFilter = this.activeQuickFilter();
    const filters = this.sideFilters();
    const search = this.searchService.searchQuery().toString().toLowerCase();
    const searchFields: (keyof CarModel)[] = [
      'name',
      'model',
      'transmission',
      'seater',
      'fuelType',
      'carType',
      'availabilty',
      'price',
      'location',
      'luxury',
      'mileage',
      'deliveryType',
    ];

    let result = cars;

    if (quickFilter && quickFilter !== 'ALL') {
      switch (quickFilter) {
        case 'AUTOMATIC':
          result = result.filter((c) => c.transmission === 'Automatic');
          break;

        case 'DIESEL':
          result = result.filter((c) => c.fuelType === 'Diesel');
          break;

        case 'DELIVERY':
          result = result.filter((c) => c.deliveryType === 'Door Delivery');
          break;

        case 'RATING_4_5':
          result = result.filter((c) => {
            const rating = Number(c.ratings);
            return !isNaN(rating) && rating >= 4.5;
          });
          break;

        case 'LUXURY':
          result = result.filter((c) => c.luxury === true);
          break;

        case 'SUV':
          result = result.filter((c) => c.carType === 'SUV');
          break;

        case 'ELECTRIC':
          result = result.filter((c) => c.fuelType === 'Electric');
          break;

        case 'SEDAN':
          result = result.filter((c) => c.carType === 'Sedan');
          break;

        default:
          break;
      }
    }

    if (search.trim()) {
      result = result.filter((item) =>
        searchFields.some((field) => {
          const value = item[field];
          return (
            value !== null && value !== undefined && value.toString().toLowerCase().includes(search)
          );
        })
      );
    }

    if (filters.modelYear) {
      result = result.filter((c) =>
        filters.modelYear!.some((range) => c.model >= range.min && c.model <= range.max)
      );
    }

    if (filters.transmission?.length) {
      result = result.filter((c) => filters.transmission!.includes(c.transmission));
    }

    if (filters.fuelType?.length) {
      result = result.filter((c) => filters.fuelType!.includes(c.fuelType));
    }

    if (filters.carType?.length) {
      result = result.filter((c) => filters.carType!.includes(c.carType));
    }

    if (filters.deliveryType?.length) {
      result = result.filter((c) => filters.deliveryType!.includes(c.deliveryType!));
    }

    if (filters.seater?.length) {
      result = result.filter((c) => filters.seater!.includes(c.seater!));
    }

    if (filters.ratings) {
      result = result.filter((c) =>
        filters.ratings!.some(
          (range) => Number(c.ratings) >= range.min && Number(c.ratings) <= range.max
        )
      );
    }

    if (filters.luxury) {
      result = result.filter((c) => c.luxury === true);
    }

    if (filters.price) {
      result = result.filter((c) =>
        filters.price!.some((range) => c.price >= range.min && c.price <= range.max)
      );
    }

    return result;
  });

  onSearch(value: string | number) {
    this.searchService.setQuery(value);
  }

  onQuickFilter(quick: string) {
    if (quick === 'ALL') {
      this.activeQuickFilter.set(null);
      this.sideFilters.set({});
      this.searchService.setQuery('');
      return;
    }

    this.activeQuickFilter.set(quick);
  }

  onSideFilter(filter: SideFilterChange) {
    const current = { ...this.sideFilters() };

    switch (filter.key) {
      case 'modelYear':
      case 'price':
      case 'ratings': {
        const ranges = current[filter.key] ?? [];
        current[filter.key] = filter.checked
          ? [...ranges, { min: filter.min!, max: filter.max! }]
          : ranges.filter((r) => r.min !== filter.min || r.max !== filter.max);
        break;
      }

      case 'transmission':
      case 'fuelType':
      case 'carType':
      case 'deliveryType':
      case 'seater': {
        const arr = current[filter.key] ?? [];
        current[filter.key] = filter.checked
          ? [...arr, filter.value as string]
          : arr.filter((v) => v !== filter.value);
        break;
      }

      case 'luxury':
        current.luxury = filter.checked;
        break;
    }
    this.sideFilters.set(current);
  }

  onClearFilter() {
    this.sideFilters.set({});
    this.activeQuickFilter.set(null);
    this.searchService.setQuery('');
    this.clearCheckbox.update((v) => v + 1);
  }

  clearSearch() {
    this.searchInput = '';
    this.searchService.setQuery('');
  }
}
