// Angular import
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-price-v2',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './price-v2.component.html',
  styleUrls: ['./price-v2.component.scss']
})
export default class PriceV2Component {
  // public method
  parts = [
    {
      title: 'Starters',
      price: '25'
    },
    {
      title: 'Scalability',
      price: '125'
    },
    {
      title: 'Enterprise',
      price: '225'
    }
  ];

  Prices = [
    {
      icon: 'ti ti-check'
    },
    {
      icon: 'ti ti-check'
    },
    {
      icon: 'ti ti-check'
    }
  ];

  bandWidths = [
    {
      icon: 'ti ti-minus'
    },
    {
      icon: 'ti ti-minus'
    },
    {
      background: 'bg-success text-white',
      icon: 'ti ti-check'
    }
  ];

  projects = [
    {
      icon: 'ti ti-minus'
    },
    {
      background: 'bg-success text-white',
      icon: 'ti ti-check'
    },
    {
      background: 'bg-success text-white',
      icon: 'ti ti-check'
    }
  ];
}
