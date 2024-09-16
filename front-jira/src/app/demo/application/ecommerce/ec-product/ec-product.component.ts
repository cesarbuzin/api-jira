import { Component, TemplateRef } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ec-product',
  templateUrl: './ec-product.component.html',
  styleUrls: ['./ec-product.component.scss']
})
export class EcProductComponent {
  // public props
  isCollapsed = false;

  // Constructor
  constructor(private offcanvasService: NgbOffcanvas) {}

  // public method
  products = [
    {
      img: 'assets/images/application/prod-img-1.jpg',
      name: 'Earl Garrett',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
      price: '$12.99',
      mrp: '$15.99',
      rating: '(12.99+)',
      star: 'fas fa-star',
      star1: 'far fa-star',
      halfstar: 'fas fa-star-half-alt'
    },
    {
      img: 'assets/images/application/prod-img-2.jpg',
      name: 'Samuel Hampton',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
      price: '$12.99',
      mrp: '$15.99',
      rating: '(12.99+)',
      star: 'fas fa-star',
      star1: 'far fa-star',
      halfstar: 'fas fa-star-half-alt'
    },
    {
      img: 'assets/images/application/prod-img-3.jpg',
      name: 'Jimmy Morton',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
      price: '$29.99',
      mrp: '$36.00',
      rating: '(12.99+)',
      star: 'fas fa-star',
      star1: 'far fa-star',
      halfstar: 'fas fa-star-half-alt'
    },
    {
      img: 'assets/images/application/prod-img-4.jpg',
      name: 'Jimmy Morton',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
      price: '$49.99',
      mrp: '$85.00',
      rating: '(12.99+)',
      star: 'fas fa-star',
      star1: 'far fa-star',
      halfstar: 'fas fa-star-half-alt'
    },
    {
      img: 'assets/images/application/prod-img-5.jpg',
      name: 'Earl Garrett',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
      price: '$12.99',
      mrp: '$15.99',
      rating: '(12.99+)',
      star: 'fas fa-star',
      star1: 'far fa-star',
      halfstar: 'fas fa-star-half-alt'
    },
    {
      img: 'assets/images/application/prod-img-6.jpg',
      name: 'Samuel Hampton',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
      price: '$12.99',
      mrp: '$15.99',
      rating: '(12.99+)',
      star: 'fas fa-star',
      star1: 'far fa-star',
      halfstar: 'fas fa-star-half-alt'
    },
    {
      img: 'assets/images/application/prod-img-7.jpg',
      name: 'Jimmy Morton',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
      price: '$29.99',
      mrp: '$36.00',
      rating: '(12.99+)',
      star: 'fas fa-star',
      star1: 'far fa-star',
      halfstar: 'fas fa-star-half-alt'
    },
    {
      img: 'assets/images/application/prod-img-8.jpg',
      name: 'Jimmy Morton',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
      price: '$49.9',
      mrp: '$85.00',
      rating: '(12.99+)',
      star: 'fas fa-star',
      star1: 'far fa-star',
      halfstar: 'fas fa-star-half-alt'
    },
    {
      img: 'assets/images/application/prod-img-1.jpg',
      name: 'Earl Garrett',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
      price: '$12.99',
      mrp: '$15.99',
      rating: '(12.99+)',
      star: 'fas fa-star',
      star1: 'far fa-star',
      halfstar: 'fas fa-star-half-alt'
    },
    {
      img: 'assets/images/application/prod-img-2.jpg',
      name: 'Samuel Hampton',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
      price: '$12.99',
      mrp: '$15.99',
      rating: '(12.99+)',
      star: 'fas fa-star',
      star1: 'far fa-star',
      halfstar: 'fas fa-star-half-alt'
    },
    {
      img: 'assets/images/application/prod-img-3.jpg',
      name: 'Jimmy Morton',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
      price: '$29.99',
      mrp: '$36.00',
      rating: '(12.99+)',
      star: 'fas fa-star',
      star1: 'far fa-star',
      halfstar: 'fas fa-star-half-alt'
    },
    {
      img: 'assets/images/application/prod-img-4.jpg',
      name: 'Jimmy Morton',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
      price: '$49.99',
      mrp: '$85.00',
      rating: '(12.99+)',
      star: 'fas fa-star',
      star1: 'far fa-star',
      halfstar: 'fas fa-star-half-alt'
    }
  ];

  showFilter(content: TemplateRef<string>) {
    this.offcanvasService.open(content, { position: 'end' });
  }
}
