import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.css']
})
export class ItemAddComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new Item('Steel Bars', 200);

  submitted = false;

  onSubmit() {
    console.log('submit clicked');
    console.log('item : ' + JSON.stringify(this.model));
    this.submitted = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
