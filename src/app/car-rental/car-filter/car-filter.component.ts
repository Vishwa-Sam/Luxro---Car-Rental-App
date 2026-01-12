import { Component, effect, input, output, signal } from '@angular/core';

export interface SideFilterChange {
  key: string;
  value?: string | number | boolean;
  min?: number;
  max?: number;
  checked: boolean;
}

@Component({
  selector: 'app-car-filter',
  standalone: true,
  templateUrl: './car-filter.html',
  styleUrl: './car-filter.css',
})
export class CarFilterComponent {
  sideFilterChange = output<SideFilterChange>();
  clearSideFilter = output<void>();

  clearCheck = input<number>();

  checkedMap = signal<Record<string, boolean>>({});

  constructor() {
    effect(() => {
      this.clearCheck(); 
      this.checkedMap.set({});
    });
  }

  private makeKey(key: string, value: any) {
    return `${key}:${JSON.stringify(value)}`;
  }

  isChecked(key: string, value: any) {
    return !!this.checkedMap()[this.makeKey(key, value)];
  }

  onSideFilterChange(key: string, valueOrRange: any, event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    const mapKey = this.makeKey(key, valueOrRange);

    this.checkedMap.update((m) => ({
      ...m,
      [mapKey]: checked,
    }));

    if (typeof valueOrRange === 'object') {
      this.sideFilterChange.emit({
        key,
        min: valueOrRange.min,
        max: valueOrRange.max,
        checked,
      });
    } else {
      this.sideFilterChange.emit({
        key,
        value: valueOrRange,
        checked,
      });
    }
  }

  onClearSideFilter() {
    this.clearSideFilter.emit();
  }
}
