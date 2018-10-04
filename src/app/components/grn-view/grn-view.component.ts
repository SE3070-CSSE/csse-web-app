import { Component, OnInit } from '@angular/core';
import { Grn } from '../../models/grn';
import { GrnService } from '../../services/grn.service';

@Component({
  selector: 'app-grn-view',
  templateUrl: './grn-view.component.html',
  styleUrls: ['./grn-view.component.css']
})
export class GrnViewComponent implements OnInit {

  goodsReceivedNotes: Grn[];
  selectedGrn: Grn;

  constructor(private grnService: GrnService) {

  }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void {
    this.grnService.getGoodsReceivedNotes()
      .subscribe(grns => {
        this.goodsReceivedNotes = grns;
      });
  }

  makePayment() {
    console.log('payment for ' + JSON.stringify(this.selectedGrn));
  }

}
