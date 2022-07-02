import { Component } from '@angular/core';

import service from './service';
import { Pizza } from './pizza';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: Pizza[] = [];

  constructor () {
    this.getPizzaItems();
  }

  getPizzaItems() {
    const getPizzas = async () => {
      this.items = await service.getPizzaItems();
    }
    getPizzas();
  }
}
