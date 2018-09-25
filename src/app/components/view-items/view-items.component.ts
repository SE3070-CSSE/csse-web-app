import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item';

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit {
  items: any[];
  selected: string[] = [];
  selectedForEdit;
  modalOpened;
  categories = ['BEAMS', 'NAILS',
  'WINDOWS', 'PLANKS'];
  model = new Item(null, null, null, null, '-');

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
    this.model = JSON.parse(JSON.stringify(this.selected[0])) as Item;
    this.modalOpened = true;

  }

  onSubmitEdited() {
    this.toastr.info(JSON.stringify(this.model));
    // console.log(this.selected);
    // this.itemService.deleteItems(JSON.parse(JSON.stringify(this.selected)))
    //   .subscribe(
    //     any => {
    //       console.log('deleted items' + this.selected);
    //       this.toastr.success('deleted items');
    //       this.getItems();
    //     },
    //     err  => this.toastr.error(err)
    //   );
  }

}
