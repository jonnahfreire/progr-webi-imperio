import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from '../pizza';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  price = "";
  @Input() item: Pizza = {id: 0, name: "", img: "", price: 0.0, sizes: [], description: ""};
    
  constructor() { }
    
  ngOnInit(): void {
    this.price =  new Intl.NumberFormat(`pt-BR`, {
      currency: `BRL`,
      style: 'currency',
    }).format(this.item.price);
  }
}
