// Angular Import
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  // private props
  @Input() trash = true;

  // private Method
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
}
