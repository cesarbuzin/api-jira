import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  // public method
  SocialMediaList = [
    {
      href: 'https://codedthemes.com/',
      title: 'https://codedthemes.com/',
      icon: 'public',
      icon2: 'material-icons-two-tone me-2 text-secondary'
    },
    {
      href: 'https://www.instagram.com/codedthemes',
      title: 'https://www.instagram.com/codedthemes',
      icon2: 'ti ti-brand-instagram f-24 me-2 text-danger'
    },
    {
      href: 'https://www.facebook.com/codedthemes',
      title: 'https://www.facebook.com/codedthemes',
      icon2: 'material-icons-two-tone me-2 text-secondary',
      icon: 'facebook'
    },
    {
      href: 'https://in.linkedin.com/company/codedthemes',
      title: 'https://in.linkedin.com/company/codedthemes',
      icon2: 'ti ti-brand-linkedin f-24 me-2 text-dark'
    }
  ];

  CommentList = [
    {
      src: 'assets/images/user/avatar-4.jpg',
      user: 'Barney Thea',
      time: '8 min ago',
      spce: 'mb-3',
      text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
      src: 'assets/images/user/avatar-3.jpg',
      user: 'Barney Thea',
      time: '8 min ago',
      spce: 'mb-3',
      text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
      src: 'assets/images/user/avatar-5.jpg',
      user: 'Barney Thea',
      time: '8 min ago',
      spce: 'ms-5',
      text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    }
  ];
}
