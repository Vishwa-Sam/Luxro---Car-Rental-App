import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

type AlertType = 'success' | 'info' | 'warning' | 'error';

@Component({
  selector: 'app-alert-message',
  imports: [CommonModule],
  templateUrl: './alert-message.html',
  styleUrl: './alert-message.css',
})
export class AlertMessageCompoent {
  @Input() type: AlertType = 'info';
  @Input() message = '';
  @Output() close = new EventEmitter<void>();

  get classes() {
    const map = {
      success: {
        bg: 'bg-green-100 dark:bg-green-900',
        border: 'border-green-500 dark:border-green-700',
        text: 'text-green-900 dark:text-green-100',
        icon: 'text-green-600',
      },
      info: {
        bg: 'bg-blue-100 dark:bg-blue-900',
        border: 'border-blue-500 dark:border-blue-700',
        text: 'text-blue-900 dark:text-blue-100',
        icon: 'text-blue-600',
      },
      warning: {
        bg: 'bg-yellow-100 dark:bg-yellow-900',
        border: 'border-yellow-500 dark:border-yellow-700',
        text: 'text-yellow-900 dark:text-yellow-100',
        icon: 'text-yellow-600',
      },
      error: {
        bg: 'bg-red-100 dark:bg-red-900',
        border: 'border-red-500 dark:border-red-700',
        text: 'text-red-900 dark:text-red-100',
        icon: 'text-red-600',
      },
    };

    return map[this.type];
  }

  onClose() {
    this.close.emit();
  }
}
