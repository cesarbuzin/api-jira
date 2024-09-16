// Angular import
import { Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

// Bootstrap import
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-invoice',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './create-invoice.component.html',
  styleUrls: ['./create-invoice.component.scss']
})
export default class CreateInvoiceComponent {
  // private props
  closeResult = '';
  todoListMessage!: string;
  ListDescription!: string;
  ListQuantity!: string;
  ListAmount!: string;
  ListTotal!: string;
  todo_list_message_error!: boolean;
  todoList: object[] = [];

  // Constructor
  constructor(private modalService: NgbModal) {
    const random = Math.floor(Math.random() * (999999 - 100000)) + 100000;
    this.todoList.push({
      cId: random,
      msg: 'Logo Design',
      dis: 'lorem ipsum dolor sit amat, connecter adieu siccing eliot',
      quantity: '6',
      amount: '$100',
      total: '$600'
    });
    this.todoList.push({
      cId: random,
      msg: 'Logo Design',
      dis: 'lorem ipsum dolor sit amat, connecter adieu siccing eliot',
      quantity: '7',
      amount: '$100',
      total: '$700'
    });
    this.todoList.push({
      cId: random,
      msg: 'Logo Design',
      dis: 'lorem ipsum dolor sit amat, connecter adieu siccing eliot',
      quantity: '5',
      amount: '$150',
      total: '$750'
    });
  }

  // private method
  addTodoList() {
    if (
      (this.todoListMessage === '' || this.todoListMessage === undefined,
      this.ListDescription === '' || this.ListDescription === undefined,
      this.ListQuantity === '' || this.ListQuantity === undefined,
      this.ListAmount === '' || this.ListAmount === undefined,
      this.ListTotal === '' || this.ListTotal === undefined)
    ) {
      this.todo_list_message_error = true;
    } else {
      const random = Math.floor(Math.random() * (999999 - 100000)) + 100000;
      this.todoList.push({
        cId: random,
        msg: this.todoListMessage,
        dis: this.ListDescription,
        quantity: this.ListQuantity,
        amount: this.ListAmount,
        total: this.ListTotal
      });
      this.todoListMessage = '';
      this.ListDescription = '';
      this.ListQuantity = '';
      this.ListAmount = '';
      this.ListTotal = '';
    }
  }

  completeTodoList(e: {
    target: { parentElement: { classList: { remove: (arg0: string) => void; add: (arg0: string) => void } }; checked: boolean };
  }) {
    e.target.parentElement.classList.remove('done-task');
    if (e.target.checked) {
      e.target.parentElement.classList.add('done-task');
    }
  }

  OpenBootstrap(content17: ElementRef) {
    this.modalService.open(content17, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  private getDismissReason(reason: ModalDismissReasons): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  printPage() {
    const link2 = document.createElement('link');
    link2.innerHTML =
      '<style>@media print{*,::after,::before{text-shadow:none!important;box-shadow:none!important}a:not(.btn){text-decoration:none}abbr[title]::after{content:" ("attr(title) ")"}pre{white-space:pre-wrap!important}blockquote,pre{border:1px solid #adb5bd;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}@page{size:a3}body{min-width:992px!important}.container{min-width:992px!important}.page-header,.coded-navbar,.coded-mob-header,.coded-header,.menu-styler,.modal,.navbar{display:none}.coded-main-container{top:0;margin-left:0;}.invoice-contact{padding-top:0;}@page,.card-body,.card-header,body,.coded-content{padding:0;margin:0}.badge{border:1px solid #000}.table{border-collapse:collapse!important}.table td,.table th{background-color:#fff!important}.table-bordered td,.table-bordered th{border:1px solid #dee2e6!important}.table-dark{color:inherit}.table-dark tbody+tbody,.table-dark td,.table-dark th,.table-dark thead th{border-color:#dee2e6}.table .thead-dark th{color:inherit;border-color:#dee2e6}}</style>';

    document.getElementsByTagName('head')[0].appendChild(link2);
    window.print();
  }

  details = [
    {
      title: 'Customer Name',
      value: 'Alex Z.'
    },
    {
      title: 'Customer Email',
      value: 'alex@company.com'
    },
    {
      title: 'Customer Contact Number',
      value: '+ 00 00000 00000'
    }
  ];

  total = [
    {
      title: 'Sub Total :',
      text: '$4725.00'
    },
    {
      title: 'Taxes (10%) :',
      text: '$57.00'
    },
    {
      title: 'Discount (5%) :',
      text: '$45.00'
    }
  ];
}
