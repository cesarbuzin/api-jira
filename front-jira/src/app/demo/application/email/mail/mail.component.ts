// Angular Import
import { Component, Input } from '@angular/core';
import { transition, style, animate, trigger } from '@angular/animations';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent {
  // private Props
  @Input() Check = false;
  @Input() unCheck = true;
  @Input() important = false;
  @Input() unimportant = true;
  @Input() common = true;
  @Input() promotion = false;
  @Input() Forums = false;
  @Input() paperClip = true;

  show = false;
  fadein = true;

  enterTransition = transition(':enter', [
    style({
      opacity: 0
    }),
    animate(
      '0.15s ease-in',
      style({
        opacity: 1
      })
    )
  ]);

  leaveTrans = transition(':leave', [
    style({
      opacity: 1
    }),
    animate(
      '0.15s ease-out',
      style({
        opacity: 0
      })
    )
  ]);

  fadeIn = trigger('fadeIn', [this.enterTransition]);
  fadeOut = trigger('fadeOut', [this.leaveTrans]);

  // private Method
  onClick() {
    this.show = !this.show;
    this.fadein = !this.fadein;
  }

  onSave() {
    this.show = false;
    this.fadein = true;
  }

  MailList = [
    {
      name: 'Barney Thea',
      img: 'assets/images/user/avatar-1.jpg',
      date: '12 Jul 22 08:23 AM',
      des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.been the industry standard dummy text ever since the 1500s.'
    },
    {
      name: 'Zachary Chambers ',
      prom: 'promotion',
      from: 'Forums',
      icon: 'ti ti-paperclip',
      date: '13 Jul 22 08:23 AM',
      img: 'assets/images/user/avatar-2.jpg',
      des: 'of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply dummy text the industrys standard dummy text ever since the 1500s.'
    },
    {
      name: 'Mattie Reid ',
      date: '14 Jul 22 08:23 AM',
      img: 'assets/images/user/avatar-3.jpg',
      des: 'simply dummy text the industrys standard dummy text ever since the 1500s.'
    },
    {
      name: 'Nathaniel Vasquez',
      date: '15 Jul 22 08:23 AM',
      from: 'Forums',
      icon: 'ti ti-paperclip',
      img: 'assets/images/user/avatar-4.jpg',
      des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.been the industry standard dummy text ever since the 1500s.'
    },
    {
      name: 'Zachary Chambers',
      date: '16 Jul 22 08:23 AM',
      prom: 'promotion',
      icon: 'ti ti-paperclip',
      img: 'assets/images/user/avatar-5.jpg',
      des: 'of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply dummy text the industrys standard dummy text ever since the 1500s.'
    },
    {
      name: 'Barney Thea',
      img: 'assets/images/user/avatar-1.jpg',
      date: '12 Jul 22 08:23 AM',
      des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.been the industry standard dummy text ever since the 1500s.'
    },
    {
      name: 'Zachary Chambers ',
      prom: 'promotion',
      from: 'Forums',
      icon: 'ti ti-paperclip',
      date: '13 Jul 22 08:23 AM',
      img: 'assets/images/user/avatar-2.jpg',
      des: 'of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply dummy text the industrys standard dummy text ever since the 1500s.'
    },
    {
      name: 'Mattie Reid ',
      date: '14 Jul 22 08:23 AM',
      img: 'assets/images/user/avatar-3.jpg',
      des: 'simply dummy text the industrys standard dummy text ever since the 1500s.'
    },
    {
      name: 'Nathaniel Vasquez',
      date: '15 Jul 22 08:23 AM',
      from: 'Forums',
      icon: 'ti ti-paperclip',
      img: 'assets/images/user/avatar-4.jpg',
      des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.been the industry standard dummy text ever since the 1500s.'
    },
    {
      name: 'Zachary Chambers',
      date: '16 Jul 22 08:23 AM',
      prom: 'promotion',
      icon: 'ti ti-paperclip',
      img: 'assets/images/user/avatar-5.jpg',
      des: 'of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply dummy text the industrys standard dummy text ever since the 1500s.'
    },
    {
      name: 'Barney Thea',
      img: 'assets/images/user/avatar-1.jpg',
      date: '12 Jul 22 08:23 AM',
      des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.been the industry standard dummy text ever since the 1500s.'
    },
    {
      name: 'Zachary Chambers ',
      prom: 'promotion',
      from: 'Forums',
      icon: 'ti ti-paperclip',
      date: '13 Jul 22 08:23 AM',
      img: 'assets/images/user/avatar-2.jpg',
      des: 'of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply dummy text the industrys standard dummy text ever since the 1500s.'
    },
    {
      name: 'Mattie Reid ',
      date: '14 Jul 22 08:23 AM',
      img: 'assets/images/user/avatar-3.jpg',
      des: 'simply dummy text the industrys standard dummy text ever since the 1500s.'
    },
    {
      name: 'Nathaniel Vasquez',
      date: '15 Jul 22 08:23 AM',
      from: 'Forums',
      icon: 'ti ti-paperclip',
      img: 'assets/images/user/avatar-4.jpg',
      des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.been the industry standard dummy text ever since the 1500s.'
    },
    {
      name: 'Zachary Chambers',
      date: '16 Jul 22 08:23 AM',
      prom: 'promotion',
      icon: 'ti ti-paperclip',
      img: 'assets/images/user/avatar-5.jpg',
      des: 'of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply dummy text the industrys standard dummy text ever since the 1500s.'
    }
  ];
}
