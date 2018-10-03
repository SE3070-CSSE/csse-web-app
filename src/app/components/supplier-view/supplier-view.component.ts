import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supplier-view',
  templateUrl: './supplier-view.component.html',
  styleUrls: ['./supplier-view.component.css']
})
export class SupplierViewComponent implements OnInit {

  constructor() { }

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
          this.toastr.success('Successfully deleted');
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

  onSubmitEdited() {
    console.log(this.model);
    this.SupplierService.updateSupplier(this.model)
      .subscribe(
        any => {
          console.log('updated supplier' + JSON.stringify(this.model));
          this.toastr.success('Supplier updated successfully');
          this.getSuppliers();
        },
        err => this.toastr.error(err)
      );
    this.modalOpened = false;
  }
  
  onSubmit() {
    this.toastr.info(JSON.stringify(this.model));
  }

}
