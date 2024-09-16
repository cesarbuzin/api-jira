// angular import
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

// third party
import { DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, SharedModule, DataTablesModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export default class ProductListComponent implements OnInit {
  // public props
  dtExportButtonOptions: object = {};

  // Life cycle events
  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/ec-product-list.json',
      columns: [
        {
          title: '<div class="form-check"><input class="form-check-input" placeholder="checkbox" type="checkbox"></div>',
          render: function () {
            return '<div class="form-check"><input class="form-check-input" placeholder="checkbox" type="checkbox"></div>';
          }
        },
        {
          title: '#',
          // eslint-disable-next-line
          render: function (data: any, type: any, full: { src: any }) {
            let result;
            switch (full.src) {
              default:
                // two way come images one use
                // result= '<img src="' + full.src + '" alt="image" class="wid-50 rounded" />'
                result = `<img src="${full.src}" alt="image" class="wid-50 rounded" />`;
                break;
            }
            return result;
          }
        },
        {
          title: 'Name',
          data: 'name'
        },
        {
          title: 'Create',
          data: 'create'
        },
        {
          title: 'Price',
          data: 'price'
        },
        {
          title: 'Sale Price',
          data: 'sPrice'
        },
        {
          title: 'Status',
          // eslint-disable-next-line
          render: function (data: any, type: any, full: { status: string }) {
            let result;
            switch (full.status) {
              case 'Confirm':
                result = '<span class="badge bg-light-success rounded f-12">' + full.status + '</span>';
                break;
              case 'Out of Stock':
                result = '<span class="badge bg-light-danger rounded f-12">' + full.status + '</span>';
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
            return '<div ngbDropdown><a class="avtar avtar-s btn-link-secondary dropdown-toggle arrow-none show"  ngbDropdownToggle><i class="ti ti-dots f-18"></i></a><div class="dropdown-menu dropdown-menu-end" ngbDropdownMenu><a class="dropdown-item" href="javascript:">Edit</a></div></div> ';
          }
        }
      ]
    };
  }
}
