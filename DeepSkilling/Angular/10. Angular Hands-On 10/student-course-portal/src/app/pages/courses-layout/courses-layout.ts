import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-courses-layout',
  imports: [RouterOutlet],
  template: `
    <div class="layout-container">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .layout-container { padding: 10px; }
  `]
})
export class CoursesLayout {}
