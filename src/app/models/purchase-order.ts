import { PurchaseRequest } from './purchase-request';
import { OrderLineItem } from './order-line-item';

export class PurchaseOrder {

    constructor(

        public purchaseRequest: string,
        public supplier: string,
        public createdOn: Date,
        public status: string,
        public orderItems: OrderLineItem[],
        public totalPrice: number
      ) {  }
}
