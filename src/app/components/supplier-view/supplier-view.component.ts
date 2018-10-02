import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SupplierService } from '../../services/supplier.service';
import { Supplier } from '../../models/supplier';

@Component({
  selector: 'app-supplier-view',
  templateUrl: './supplier-view.component.html',
  styleUrls: ['./supplier-view.component.css']
})
export class SupplierViewComponent implements OnInit {

  suppliers: any[];
  selected: string[] = [];
  selectedForEdit;
  modalOpened;
  model = new Supplier(null, null, null, null);

  constructor(private toastr: ToastrService, private SupplierService: SupplierService) { }

  ngOnInit() {
    this.getSuppliers();
  }

  getSuppliers(): void {
    this.SupplierService.getSuppliers()
      .subscribe(suppliers => {
        this.suppliers = suppliers;
        console.log('this.suppliers' + this.suppliers);
      });
  }

  onDelete() {
    console.log(this.selected);
    this.SupplierService.deleteSuppliers(JSON.parse(JSON.stringify(this.selected)))
      .subscribe(
        any => {
          console.log('deleted suppliers' + this.selected);
          this.toastr.success('deleted suppliers');
          this.getSuppliers();
        },
        err  => this.toastr.error(err)
      );
  }

  onEdit() {
    console.log(JSON.stringify(this.selected));
    this.model = JSON.parse(JSON.stringify(this.selected[0])) as Supplier;
    this.modalOpened = true;

  }

  
  onSubmit() {
    this.toastr.info(JSON.stringify(this.model));
  }

}
