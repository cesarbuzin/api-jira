// Angular import
import { Component, ElementRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.scss'],
  animations: [
    trigger('fade', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [style({ opacity: 0 }), animate(600)]),
      transition(':leave', animate(600, style({ opacity: 0 })))
    ])
  ]
})
export class CartDetailComponent {
  // Constructor
  constructor(private modalService: NgbModal) {}

  // public method
  inputNumber = 0;

  plus() {
    this.inputNumber = this.inputNumber + 1;
  }
  minus() {
    if (this.inputNumber != 0) {
      this.inputNumber = this.inputNumber - 1;
    }
  }

  couponCode(content: ElementRef) {
    this.modalService.open(content, { size: 'lg' });
  }

  getTotal = [
    {
      title: 'Sub Total',
      price: '$300.00'
    },
    {
      title: 'Coupon Discount',
      price: '-'
    },
    {
      title: 'Shipping Charges',
      price: '-'
    }
  ];

  coupons = [
    {
      color: 'border-secondary',
      offer: 'Up to 50% Off',
      code: 'BERRY50',
      colorCode: 'btn-light-secondary'
    },
    {
      color: 'border-danger',
      offer: 'Festival Fires',
      code: 'FLAT05',
      colorCode: 'btn-light-danger'
    }
  ];

  couponsCode = [
    {
      offer: 'Get $150 off on your subscription',
      color: 'bg-primary',
      icon: 'ti ti-gift',
      description: 'When you subscribe to the unlimited consultation plan on berry.',
      code: 'SUB150',
      codeColor: 'btn-light-primary'
    },
    {
      offer: 'Save up to $200',
      color: 'bg-warning',
      icon: 'ti ti-gift',
      description: 'Make 4 play store recharge code purchases & save up to $200',
      code: 'UPTO200',
      codeColor: 'btn-light-warning'
    }
  ];
}
