// angular import
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

// third party
import { DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [CommonModule, SharedModule, DataTablesModule],
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export default class OrderListComponent implements OnInit {
  // private props
  dtExportButtonOptions: object = {};

  // Life cycle events
  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/order_list.json',
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
          title: 'Customer-Name',
          data: 'customer-name'
        },
        {
          title: 'Branch',
          data: 'branch'
        },
        {
          title: 'Payment-Type',
          data: 'payment-type'
        },
        {
          title: 'Quantity',
          data: 'quantity'
        },
        {
          title: 'Registered',
          data: 'registered'
        },
        {
          title: 'Status',
          // eslint-disable-next-line
          render: function (data: any, type: any, full: { status: string }) {
            let result;
            switch (full.status) {
              case 'Processing':
                result = '<span class="badge bg-light-primary rounded-pill f-12">' + full.status + '</span>';
                break;
              case 'Complete':
                result = '<span class="badge bg-light-success rounded-pill f-12">' + full.status + '</span>';
                break;
              case 'Pending':
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
            return '<span><button class="btn btn-link-primary" title="View"><i class="ti ti-eye"></i></button></span> <button class="btn btn btn-link-secondary" title="Edit"><i class="ti ti-pencil"></i></button>';
          }
        }
      ]
    };
  }
}
