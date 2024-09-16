// Angular import
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

//third Party
import { DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [CommonModule, SharedModule, DataTablesModule],
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export default class CustomerListComponent implements OnInit {
  // private props
  dtExportButtonOptions: object = {};

  // Life cycle events
  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/customer-list.json',
      columns: [
        {
          title: '<div class="form-check"><input class="form-check-input" placeholder="checkbox" type="checkbox"></div>',
          render: function () {
            return '<div class="form-check"><input class="form-check-input" placeholder="checkbox" type="checkbox"></div>';
          }
        },
        {
          title: 'Customer-Name',
          data: 'customer-name'
        },
        {
          title: 'Location',
          data: 'location'
        },
        {
          title: 'Email',
          data: 'email'
        },
        {
          title: 'Orders',
          data: 'orders'
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
              case 'Confirm':
                result = '<span class="badge bg-light-primary rounded-pill f-12">' + full.status + '</span>';
                break;
              case 'Complete':
                result = '<span class="badge bg-light-success rounded-pill f-12">' + full.status + '</span>';
                break;
              case 'Processing':
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
