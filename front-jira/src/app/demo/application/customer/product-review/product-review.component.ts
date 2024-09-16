// Angular import
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-product-review',
  standalone: true,
  imports: [CommonModule, SharedModule, DataTablesModule],
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.scss']
})
export default class ProductReviewComponent implements OnInit {
  // Private props
  dtExportButtonOptions: object = {};

  // Life cycle events
  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/product-review.json',
      columns: [
        {
          title: '<div class="form-check"><input class="form-check-input" type="checkbox"></div>',
          render: function () {
            return '<div class="form-check"><input class="form-check-input" type="checkbox"></div>';
          }
        },
        {
          title: 'Product Name',
          data: 'product-name'
        },
        {
          title: 'Author',
          data: 'author'
        },
        {
          title: 'Review',
          data: 'review'
        },
        {
          title: 'Rating',
          // eslint-disable-next-line
          render: function (data: any, type: any, full: { rating: any }) {
            let result;
            switch (full.rating) {
              case 'Medium':
                result =
                  '<i class="fas fa-star text-warning me-1"></i>' +
                  '<i class="fas fa-star text-warning me-1"></i>' +
                  '<i class="fas fa-star text-warning me-1"></i>' +
                  '<i class="fas fa-star-half-alt text-warning me-1"></i>' +
                  '<i class="far fa-star text-muted"></i>';
                break;
              case 'Good':
                result =
                  '<i class="fas fa-star text-warning me-1"></i>' +
                  '<i class="fas fa-star text-warning me-1"></i>' +
                  '<i class="fas fa-star text-warning me-1"></i>' +
                  '<i class="fas fa-star text-warning me-1"></i>' +
                  '<i class="fas fa-star text-warning"></i>';
                break;
              case 'Poor':
                result =
                  '<i class="fas fa-star text-warning me-1"></i>' +
                  '<i class="fas fa-star text-warning me-1"></i>' +
                  '<i class="fas fa-star text-warning me-1"></i>' +
                  '<i class="far fa-star text-muted me-1"></i>' +
                  '<i class="far fa-star text-muted"></i>';
                break;
              default:
                break;
            }
            return result;
          }
        },
        {
          title: 'Date',
          data: 'date'
        },
        {
          title: 'STATUS',
          // eslint-disable-next-line
          render: function (data: any, type: any, full: { status: string }) {
            let result;
            switch (full.status) {
              case 'Confirm':
                result = '<span class="badge bg-light-primary rounded-pill f-12">' + full.status + '</span>';
                break;
              case 'Complete':
                result = '<span class="badge bg-light-success rounded-pill f-12">' + full.status + '</span>';
                break;
              case 'processing':
                result = '<span class="badge bg-light-danger rounded-pill f-12">' + full.status + '</span>';
                break;
              default:
                break;
            }
            return result;
          }
        },
        {
          title: 'Action',
          render: function () {
            return '<span><button class="btn btn-link-primary"><i class="ti ti-eye"></i></button></span> <button class="btn btn btn-link-secondary"><i class="ti ti-pencil"></i></button>';
          }
        }
      ]
    };
  }
}
