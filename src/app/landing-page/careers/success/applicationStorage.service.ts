import { Injectable } from '@angular/core';
import { JobApplication } from '../careers.model';

const STORAGE_KEY = 'luxro-job-applications';

@Injectable({
  providedIn: 'root',
})
export class ApplicationStorageService {
  save(application: JobApplication) {
    const existing = this.getAll();
    existing.push(application);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
  }

  getAll(): JobApplication[] {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  }

  clear() {
    localStorage.removeItem(STORAGE_KEY);
  }
}
