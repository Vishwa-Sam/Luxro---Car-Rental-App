import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  searchQuery = signal<string | number>('');

  setQuery(value: string | number) {
    this.searchQuery.set(value);
  }
}
