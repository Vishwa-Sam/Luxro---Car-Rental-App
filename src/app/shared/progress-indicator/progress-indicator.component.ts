import { Component, input } from '@angular/core';

@Component({
  selector: 'app-progress-indicator',
  imports: [],
  templateUrl: './progress-indicator.component.html',
  styleUrl: './progress-indicator.component.css',
})
export class ProgressIndicatorComponent {
  currentStep = input<number>(1);
}
