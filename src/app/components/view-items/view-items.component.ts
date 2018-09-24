import { Component, OnInit } from '@angular/core';
import {ItemService} from '../../services/item.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit {
  items: any[];
  selected: string[] = [];
  constructor(private toastr: ToastrService, private itemService: ItemService) { }

  ngOnInit() {
    this.getItems();

  }

  getItems(): void {
    this.itemService.getItems()
      .subscribe(items => {
        this.items = items;
        console.log('this.items' + this.items);
      });
  }

  onDelete() {
    console.log(this.selected);
    this.itemService.deleteItems(JSON.parse(JSON.stringify(this.selected)))
      .subscribe(
        any => {
          console.log('deleted items' + this.selected);
          this.toastr.success('deleted items');
          this.getItems();
        },
        err  => this.toastr.error(err)
      );
  }

  onEdit() {
    console.log(JSON.stringify(this.selected));
  }
}
