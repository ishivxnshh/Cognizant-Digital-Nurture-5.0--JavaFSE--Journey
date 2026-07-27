import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  template: `
    <div class="not-found-container">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <button routerLink="/">Back to Home</button>
    </div>
  `,
  styles: [`
    .not-found-container {
      text-align: center;
      padding: 50px;
      font-family: Arial, sans-serif;
    }
    h1 { font-size: 4em; color: #d32f2f; margin: 0; }
    h2 { color: #555; }
    button { padding: 10px 20px; background-color: #004d40; color: white; border: none; border-radius: 4px; cursor: pointer; }
    button:hover { background-color: #00332a; }
  `]
})
export class NotFound {}
