import { CommonModule } from '@angular/common';
import { Component, output, signal } from '@angular/core';

@Component({
  selector: 'app-quick-filter',
  imports: [CommonModule],
  templateUrl: './quick-filter.html',
  styleUrl: './quick-filter.css',
})
export class QuickFilterComponent {
  quickFilterChange = output<string>();
  active = signal<string>('');

  selectedQuickFilter(filter: string) {
    this.active.set(filter);
    this.quickFilterChange.emit(filter);
  }
}
