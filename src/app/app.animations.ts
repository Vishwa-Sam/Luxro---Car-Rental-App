import { trigger, style, animate, transition, keyframes } from '@angular/animations';

export const contentFadeInOut = trigger('contentFadeInOut', [
  transition(':enter', [
    animate(
      '1500ms ease-out',
      keyframes([
        style({ opacity: 0, offset: 0 }),
        style({ opacity: 0.25, offset: 0.25 }),
        style({ opacity: 0.5, offset: 0.5 }),
        style({ opacity: 0.75, offset: 0.75 }),
        style({ opacity: 1, offset: 1 }),
      ])
    ),
  ]),

  transition(':leave', [
    animate(
      '1000ms ease-in',
      keyframes([
        style({ opacity: 1, offset: 0 }),
        style({ opacity: 0.5, offset: 0.5 }),
        style({ opacity: 0, offset: 1 }),
      ])
    ),
  ]),
]);

export const cardAnimation = trigger('cardAnimation', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(-120px)' }),
    animate('1100ms ease-in', style({ opacity: 1, transform: 'translateX(0)' })),
  ]),
]);

export const formAnimation = trigger('formAnimation', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(-25px) scale(0.95)' }),
    animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0) scale(1)' })),
  ]),
  transition(':leave', [
    animate('700ms ease-in', style({ opacity: 0, transform: 'translateY(-10px) scale(0.97)' })),
  ]),
]);
