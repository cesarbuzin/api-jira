// angular import
import { Component, OnInit, TemplateRef } from '@angular/core';

// bootstrap import
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  // public props
  dtExportButtonOptions: object = {};

  // Constructor
  constructor(private offcanvasService: NgbOffcanvas) {}

  // Life cycle events
  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/product.json',
      columns: [
        {
          title: '<div class="form-check"><input class="form-check-input" placeholder="checkbox" type="checkbox"></div>',
          render: function () {
            return '<div class="form-check"><input class="form-check-input" placeholder="checkbox" type="checkbox"></div>';
          }
        },
        {
          title: 'Id',
          data: 'id'
        },
        {
          title: 'Product Name',
          data: 'product name'
        },
        {
          title: 'Category',
          data: 'category'
        },
        {
          title: 'Price',
          data: 'price'
        },
        {
          title: 'Date',
          data: 'date'
        },
        {
          title: 'Qty',
          data: 'qty'
        },
        {
          title: 'Action',
          render: function () {
            return '<span><button class="btn btn-link-primary"><i class="ti ti-eye"></i></button></span> <button class="btn btn btn-link-secondary"><i class="ti ti-pencil"></i></button> <button type="button" class="btn btn-link-danger"><i class="ti ti-trash"></i></button>';
          }
        }
      ]
    };
  }

  // public method
  productData(content: TemplateRef<string>) {
    this.offcanvasService.open(content, { position: 'end' });
  }
}
