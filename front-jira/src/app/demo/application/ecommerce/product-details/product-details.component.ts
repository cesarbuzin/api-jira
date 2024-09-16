// angular import
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  animations: [
    trigger('fade', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [style({ opacity: 0 }), animate(600)]),
      transition(':leave', animate(600, style({ opacity: 0 })))
    ])
  ]
})
export default class ProductDetailsComponent {
  // public props
  isCollapsed = false;
  isCollapsed2 = true;
  isCollapsed3 = true;
  img = 'assets/images/application/prod-img-1.jpg';
  description =
    'Nakot cutamud dedos tesdep fif ciwonma egaveg led evosog ne nez hopana. Toon zar neesa voapafe ceeb valove besejo dof wo homlupe ca opwoega ewuzevgo ralruwep.';

  inputNumber = 0;

  plus() {
    this.inputNumber = this.inputNumber + 1;
  }
  minus() {
    if (this.inputNumber != 0) {
      this.inputNumber = this.inputNumber - 1;
    }
  }

  Specification = [
    {
      type: 'Type',
      description: 'Hooded Neck, Paint Clothes'
    },
    {
      type: 'Sleeve',
      description: 'Full'
    },
    {
      type: 'Fit',
      description: 'Regular'
    },
    {
      type: 'Fabric',
      description: 'Hosiery, Smooth, Silk'
    },
    {
      type: 'Style',
      description: 'CV-TS9865'
    },
    {
      type: 'Ideal For',
      description: 'All'
    },
    {
      type: 'Size',
      description: 'Free'
    },
    {
      type: 'Pattern',
      description: 'Printed'
    },
    {
      type: 'Reversible',
      description: 'No'
    },
    {
      type: 'Secondary Color',
      description: 'Black, Brown'
    },
    {
      type: 'Size',
      description: 'Free'
    }
  ];

  typePackage = [
    {
      type: 'Sales Package',
      text: '5 Items'
    },
    {
      type: 'Gift Box',
      text: 'Yes'
    },
    {
      type: 'Plastic Wrapper',
      text: 'Yes'
    },
    {
      type: 'Safety Wrapper',
      text: 'No'
    }
  ];

  ReviewList = [
    {
      src: 'assets/images/user/avatar-1.jpg',
      name: 'Harriet Wilson',
      date: 'Mon, Jul 25 2022',
      des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500.'
    },
    {
      src: 'assets/images/user/avatar-2.jpg',
      name: 'Lou Olson',
      date: 'Tue, Jul 19 2022',
      des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500.'
    },
    {
      src: 'assets/images/user/avatar-3.jpg',
      name: 'Emilie Wheeler',
      date: 'Mon, Jul 25 2022',
      des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500.'
    }
  ];

  RelatedProduct = [
    {
      src: 'assets/images/application/prod-img-1.jpg',
      name: 'Earl Garrett',
      rating: '(12.99+)',
      price: '$12.99',
      mrp: '$15.99'
    },
    {
      src: 'assets/images/application/prod-img-2.jpg',
      name: 'Samuel Hampton',
      rating: '(14.59+)',
      price: '$12.99',
      mrp: '$15.99'
    },
    {
      src: 'assets/images/application/prod-img-3.jpg',
      name: 'Jimmy Morton',
      rating: '(29.99+)',
      price: '$29.99',
      mrp: '$36.99'
    },
    {
      src: 'assets/images/application/prod-img-4.jpg',
      name: 'Jimmy Morton',
      rating: '(49.99+)',
      price: '$12.99',
      mrp: '$15.99'
    },
    {
      src: 'assets/images/application/prod-img-5.jpg',
      name: 'Earl Garrett',
      rating: '(12.99+)',
      price: '$12.99',
      mrp: '$15.99'
    },
    {
      src: 'assets/images/application/prod-img-6.jpg',
      name: 'Samuel Hampton',
      rating: '(14.59+)',
      price: '$12.99',
      mrp: '$15.99'
    },
    {
      src: 'assets/images/application/prod-img-7.jpg',
      name: 'Jimmy Morton',
      rating: '(29.99+)',
      price: '$29.99',
      mrp: '$36.99'
    },
    {
      src: 'assets/images/application/prod-img-8.jpg',
      name: 'Jimmy Morton',
      rating: '(49.99+)',
      price: '$12.99',
      mrp: '$15.99'
    }
  ];

  images = [
    {
      src: 'assets/images/application/prod-img-1.jpg'
    },
    {
      src: 'assets/images/application/prod-img-2.jpg'
    },
    {
      src: 'assets/images/application/prod-img-3.jpg'
    },
    {
      src: 'assets/images/application/prod-img-4.jpg'
    },
    {
      src: 'assets/images/application/prod-img-5.jpg'
    },
    {
      src: 'assets/images/application/prod-img-6.jpg'
    },
    {
      src: 'assets/images/application/prod-img-7.jpg'
    },
    {
      src: 'assets/images/application/prod-img-8.jpg'
    }
  ];

  colors = [
    {
      type: 'text-primary'
    },
    {
      type: 'text-secondary'
    },
    {
      type: 'text-danger'
    },
    {
      type: 'text-dark'
    }
  ];

  showImages(event: { target: { src: string } }) {
    if (event.target.src) {
      this.img = event.target.src;
    }
  }
}
