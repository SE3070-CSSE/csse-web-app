import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Supplier } from '../../models/supplier';
import { SupplierService } from '../../services/supplier.service';

@Component({
  selector: 'app-supplier-add',
  templateUrl: './supplier-add.component.html',
  styleUrls: ['./supplier-add.component.css']
})
export class SupplierAddComponent implements OnInit {


  ngOnInit() {
  }
  model = new Supplier(null, null, null, null);


  onSubmit() {
    console.log('submit clicked');
    console.log('supplier : ' + JSON.stringify(this.model));
    this.supplierService.addSupplier(this.model).subscribe(
      data => this.toastr.success('supplier added'),
      err  => this.toastr.error(err)
    );
  }

  constructor(private toastr: ToastrService, private supplierService: SupplierService) { }

}
