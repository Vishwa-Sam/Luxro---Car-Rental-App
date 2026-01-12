import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

import { HostApplication } from '../hostform/hostForm.model';
import { contentFadeInOut } from '../../app.animations';

@Component({
  selector: 'app-successhost',
  imports: [DatePipe],
  animations: [contentFadeInOut],
  templateUrl: './successhost.html',
  styleUrl: './successhost.css',
})
export class SuccesshostComponent implements OnInit {
  application: HostApplication | null = null;

  private router = inject(Router);

  ngOnInit(): void {
    const raw = localStorage.getItem('luxro-host-applications');

    if (raw) {
      const list: HostApplication[] = JSON.parse(raw);
      this.application = list[list.length - 1];
    }
  }

  backToPartner() {
    localStorage.removeItem('luxro-host-applications');
    this.router.navigate(['/partner']);
  }
}
