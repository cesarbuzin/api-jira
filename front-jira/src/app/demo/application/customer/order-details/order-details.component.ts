// Angular import
import { Component } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent {
  // Private Method
  itemList = [
    {
      name: 'Logo Design',
      dis: 'lorem ipsum dolor sit amat, connecter adieu siccing eliot',
      quantity: '6',
      amount: '$200',
      total: '$1200'
    },
    {
      name: 'Logo Design',
      dis: 'lorem ipsum dolor sit amat, connecter adieu siccing eliot',
      quantity: '7',
      amount: '$100',
      total: '$700'
    },
    {
      name: 'Logo Design',
      dis: 'lorem ipsum dolor sit amat, connecter adieu siccing eliot',
      quantity: '5',
      amount: '$150',
      total: '$750'
    }
  ];

  address = [
    {
      type: 'Billing address',
      name: 'Joseph',
      secondName: 'William',
      street: '4898 Joanne Lane street',
      city: 'Boston',
      country: 'United States',
      state: 'Massachusetts',
      code: '02110',
      number: '+1 (070) 123-4567'
    },
    {
      type: 'Shipping address',
      name: 'Sara',
      secondName: 'Soudan',
      street: '4898 Joanne Lane street',
      city: 'Boston',
      country: 'United States',
      state: 'Massachusetts',
      code: '02110',
      number: '+1 (070) 123-4567'
    }
  ];

  orderStatus = [
    {
      title: 'Order Place Date',
      description: '10th Mar, 2021'
    },
    {
      title: 'Order Status',
      description: 'Processing'
    },
    {
      title: 'Delivery Option',
      description: 'Fedex Express Delivery'
    },
    {
      title: 'Payment',
      description: 'Credit Card'
    },
    {
      title: 'Order Amount',
      description: '$90,020'
    }
  ];

  timelines = [
    {
      position: 'half-active',
      status: 'Order Processing',
      date: '14 Jun',
      text: 'Payment transaction [ method: Credit Card, type: sale, amount: $90,020, status: Processing ]'
    },
    {
      status: 'Order Shipping',
      date: '16 Jun',
      text: 'Sent a notification to the client by e-mail.'
    },
    {
      status: 'Order Delivered',
      date: '17 Jun',
      text: 'Order Delivered'
    }
  ];

  tables = [
    {
      title: 'Sub Total :',
      amount: '$4725.00'
    },
    {
      title: 'Taxes (10%) :',
      amount: '$57.00'
    },
    {
      title: 'Discount (5%) :',
      amount: '$45.00'
    }
  ];
}
