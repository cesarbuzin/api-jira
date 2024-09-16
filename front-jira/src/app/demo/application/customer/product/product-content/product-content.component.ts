// Angular import
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-content',
  templateUrl: './product-content.component.html',
  styleUrls: ['./product-content.component.scss']
})
export class ProductContentComponent {
  autocompleteItems = ['Alabama', 'Wyoming', 'Henry Die', 'John Doe'];
}
