import { GrnItems } from './Grn-Items';
import { PurchaseRequest } from './purchase-request';
import { Supplier } from './supplier';

export class Grn{
    constructor(
        public purchaseRequest:PurchaseRequest,
        public supplier:Supplier,
        public recievedOn:Date,
        public paymentStatus:String,
        public grnItems:GrnItems,
        public totalPrice:number

    ){}
}