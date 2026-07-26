import { Component } from '@angular/core';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notification',
  imports: [],
  // Component-level providers create a new service instance only for that component and its children.
  providers: [NotificationService], 
  template: `
    <div class="notification-box">
      {{ message }}
    </div>
  `,
  styles: [`
    .notification-box {
      margin-top: 20px;
      padding: 10px;
      background-color: #fff3e0;
      border: 1px solid #ffcc80;
      border-radius: 4px;
      font-weight: bold;
      text-align: center;
    }
  `]
})
export class NotificationComponent {
  message: string;

  constructor(private notificationService: NotificationService) {
    this.message = this.notificationService.getMessage();
  }
}
