// Angular import
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tbl-datatable',
  templateUrl: './tbl-datatable.component.html',
  styleUrls: ['./tbl-datatable.component.scss']
})
export class TblDatatableComponent implements OnInit {
  // public props
  dtExportButtonOptions: object = {};
  dtColumnsReorderOptions: object = {};
  dtResponsiveOptions: object = {};
  dtRowSelectOptions: object = {};
  dtRouterLinkOptions: object = {};

  // Life cycle events
  ngOnInit() {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/datatable-data.json',
      columns: [
        {
          title: 'Name',
          data: 'name'
        },
        {
          title: 'Position',
          data: 'position'
        },
        {
          title: 'Office',
          data: 'office'
        },
        {
          title: 'Age',
          data: 'age'
        },
        {
          title: 'Start Date',
          data: 'date'
        },
        {
          title: 'Salary',
          data: 'salary'
        }
      ],
      dom: 'Bfrtip',
      buttons: ['copy', 'print', 'excel', 'csv']
    };
    this.dtColumnsReorderOptions = {
      ajax: 'fake-data/datatable-data.json',
      columns: [
        {
          title: 'Name',
          data: 'name'
        },
        {
          title: 'Position',
          data: 'position'
        },
        {
          title: 'Office',
          data: 'office'
        },
        {
          title: 'Age',
          data: 'age'
        },
        {
          title: 'Start Date',
          data: 'date'
        },
        {
          title: 'Salary',
          data: 'salary'
        }
      ],
      dom: 'Rt',
      colReorder: {
        order: [0, 3, 4, 2, 1, 5],
        fixedColumnsRight: 1
      },
      responsive: true
    };
    this.dtResponsiveOptions = {
      ajax: 'fake-data/datatable-data.json',
      columns: [
        {
          title: 'Name',
          data: 'name'
        },
        {
          title: 'Position',
          data: 'position'
        },
        {
          title: 'Office',
          data: 'office'
        },
        {
          title: 'Age',
          data: 'age'
        },
        {
          title: 'Start Date',
          data: 'date'
        },
        {
          title: 'Salary',
          data: 'salary'
        }
      ],
      responsive: true
    };
    this.dtRowSelectOptions = {
      ajax: 'fake-data/datatable-data.json',
      columns: [
        {
          title: 'Name',
          data: 'name'
        },
        {
          title: 'Position',
          data: 'position'
        },
        {
          title: 'Office',
          data: 'office'
        },
        {
          title: 'Age',
          data: 'age'
        },
        {
          title: 'Start Date',
          data: 'date'
        },
        {
          title: 'Salary',
          data: 'salary'
        }
      ],
      responsive: true,
      select: true
    };
    this.dtRouterLinkOptions = {
      ajax: 'fake-data/datatable-data.json',
      columns: [
        {
          title: 'Name',
          data: 'name'
        },
        {
          title: 'Position',
          data: 'position'
        },
        {
          title: 'Office',
          data: 'office'
        },
        {
          title: 'Age',
          data: 'age'
        },
        {
          title: 'Start Date',
          data: 'date'
        },
        {
          title: 'Salary',
          data: 'salary'
        },
        {
          title: 'Action',
          render: function () {
            return '<button class="btn btn-outline-primary btn-sm">View</button>';
          }
        }
      ],
      responsive: true
    };
  }
}
