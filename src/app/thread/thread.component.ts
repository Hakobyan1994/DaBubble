import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-thread',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './thread.component.html',
  styleUrl: './thread.component.scss',
  animations: [
    trigger('slideFromRight', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(50%)' }),
        animate(
          '125ms ease-in-out',
          style({ opacity: 1, transform: 'translateX(0)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '125ms ease-in-out',
          style({ opacity: 0, transform: 'translateX(50%)' })
        ),
      ]),
    ]),
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0}),
        animate(
          '125ms ease-in-out',
          style({ opacity: 1})
        ),
      ]),
      transition(':leave', [
        animate(
          '125ms ease-in-out',
          style({ opacity: 0})
        ),
      ]),
    ])
  ],
})
export class ThreadComponent {
  constructor() {}

  showTopicBubble: boolean = false;
  showMessageBubble: boolean = false;
  showUserBubble: boolean = false;

  toggleTopicBubble() {
    this.showTopicBubble = !this.showTopicBubble;
  }

  toggleMessageBubble() {
    this.showMessageBubble = !this.showMessageBubble;
  }

  toggleUserBubble(){
    this.showUserBubble = !this.showUserBubble
  }
}
