import { Component, Input } from '@angular/core';

import { pizzas } from './mock-pizzas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = pizzas; 
}
