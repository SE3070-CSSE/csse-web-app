import { Component, OnInit, ViewChild } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { ToastrService } from 'ngx-toastr';
import { PurchaseOrder } from '../../models/purchase-order';
import { PurchaseRequest } from '../../models/purchase-request';
import { RequestItem } from '../../models/request-item';
import { ClrWizard, ClrWizardPage } from '@clr/angular';

@Component({
  selector: 'app-purchase-order-view',
  templateUrl: './purchase-order-view.component.html',
  styleUrls: ['./purchase-order-view.component.css']
})
export class PurchaseOrderViewComponent implements OnInit {

  @ViewChild('wizardlg') wizardLarge: ClrWizard;

  example;
  approvedRequests: any[];
  suppliers = ['supplier1', 'supplier2', 'supplier3'];
  selectedRequest;
  selectedSupplier;
  display: any;
  key: any;
  confirmedItems: RequestItem[] = [];
  dualSelectionList1: any[] = [];
  lgOpen;
  purchaseRequestModel = new PurchaseRequest(null, null, null, null, null, null, null, null);

  constructor(private toastr: ToastrService, private orderService: OrderService) { }

  ngOnInit() {
    this.getRequests();
    this.display = this.displayLabel;
    this.key = 'item.itemName';
  }

  getRequests(): void {
    this.orderService.getApprovedPurchaseRequests()
      .subscribe(requests => {
        this.approvedRequests = requests;
        console.log('this.requests' + JSON.stringify(this.approvedRequests));
      });
  }

  openOrderWizard() {
    console.log('createOrder called');
    this.purchaseRequestModel = JSON.parse(JSON.stringify(this.selectedRequest)) as PurchaseRequest;
    /**
     * Select only the items where PO's were not created
     */
    this.dualSelectionList1 = this.purchaseRequestModel.requestLineItems.filter(item => item.pocreated === false);
    console.log(JSON.stringify(this.dualSelectionList1));
    this.lgOpen = true;
  }

  private displayLabel(item: any) {
    return item.item.itemName + ' --- ' + item.quantity;
  }

  doFinish() {
    console.log(JSON.stringify(this.purchaseRequestModel.requestLineItems));
    this.confirmedItems.forEach(item => {
      item.pocreated = true;
    });
    // tslint:disable-next-line:max-line-length
    this.example = this.purchaseRequestModel.requestLineItems.map(obj => this.confirmedItems.find(o => o.item.itemName === obj.item.itemName) || obj);
    console.log(JSON.stringify(this.example));
    this.resetAll();
    // this.getRequests();
  }

  resetAll() {
    this.wizardLarge.reset();
    this.selectedRequest = null;
    this.selectedSupplier = null;
    this.confirmedItems = [];
    this.dualSelectionList1 = [];
  }

}
