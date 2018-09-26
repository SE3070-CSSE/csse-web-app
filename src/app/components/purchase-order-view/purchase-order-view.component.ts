import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { ToastrService } from 'ngx-toastr';
import { PurchaseOrder } from '../../models/purchase-order';

@Component({
  selector: 'app-purchase-order-view',
  templateUrl: './purchase-order-view.component.html',
  styleUrls: ['./purchase-order-view.component.css']
})
export class PurchaseOrderViewComponent implements OnInit {

  approvedRequests: any[];
  selected;
  modalOpened;
  model = new PurchaseOrder(null, null, null, null, null, null);

  constructor(private toastr: ToastrService, private orderService: OrderService) { }

  ngOnInit() {
    this.getRequests();
  }

  getRequests(): void {
    this.orderService.getApprovedPurchaseRequests()
      .subscribe(requests => {
        this.approvedRequests = requests;
        console.log('this.requests' + JSON.stringify(this.approvedRequests));
      });
  }

  createOrder() {
    console.log('createOrder called');
    console.log(JSON.stringify(this.selected));
  }

}
