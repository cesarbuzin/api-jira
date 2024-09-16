// Angular import
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export default class DataComponent {
  // public props
  todoListMessage!: string;
  todo_list_message_error!: boolean;
  todoList: object[] = [];

  // Constructor
  constructor() {
    const random = Math.floor(Math.random() * (999999 - 100000)) + 100000;
    this.todoList.push({ cId: random, msg: 'Lorem Ipsum Dolor Sit Amet' });
    this.todoList.push({
      cId: random + 1,
      msg: 'Industry standard dummy text ever since the 1500s'
    });
    this.todoList.push({
      cId: random + 2,
      msg: 'The point of using Lorem Ipsum is that it has a more-or-less'
    });
    this.todoList.push({ cId: random + 3, msg: 'Contrary to popular belief' });
    this.todoList.push({ cId: random + 4, msg: 'Lorem Ipsum Dolor Sit Amet' });
    this.todoList.push({ cId: random + 5, msg: 'Lorem Ipsum Dolor Sit Amet' });
  }

  // public method
  addTodoList() {
    if (this.todoListMessage === '' || this.todoListMessage === undefined) {
      this.todo_list_message_error = true;
    } else {
      const random = Math.floor(Math.random() * (999999 - 100000)) + 100000;
      this.todoList.push({ cId: random, msg: this.todoListMessage });
      this.todoListMessage = '';
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

  tableList = [
    {
      name: 'HeadPhone',
      sale: '2136',
      price: '$ 926.23',
      color: 'text-success'
    },
    {
      name: 'Iphone 6',
      sale: '2546',
      price: '$ 485.85',
      color: 'text-danger'
    },
    {
      name: 'Jacket',
      sale: '2681',
      price: '$ 786.4',
      color: 'text-primary'
    },
    {
      name: 'HeadPhone',
      sale: '2756',
      price: '$ 563.45',
      color: 'text-info'
    },
    {
      name: 'Sofa',
      sale: '8756',
      price: '$ 769.45',
      color: 'text-danger'
    },
    {
      name: 'Iphone 7',
      sale: '3652',
      price: '$ 754.45',
      color: 'text-warning'
    },
    {
      name: 'Jacket',
      sale: '7456',
      price: '$ 743.23',
      color: 'text-success'
    }
  ];

  revenueList = [
    {
      color: 'text-success',
      name: 'Bitcoin',
      percentage: '+ $145.85'
    },
    {
      color: 'text-danger',
      name: 'Ethereum',
      percentage: '- $6.368'
    },
    {
      color: 'text-success',
      name: 'Ripple',
      percentage: '+ $458.63'
    },
    {
      color: 'text-danger',
      name: 'Neo',
      percentage: '- $5.631'
    },
    {
      color: 'text-danger',
      name: 'Bitcoin',
      percentage: '- $75.86'
    },
    {
      color: 'text-success',
      name: 'Ethereum',
      percentage: '+ $453.63'
    },
    {
      color: 'text-danger',
      name: 'Ripple',
      percentage: '+ $786.63'
    },
    {
      color: 'text-success',
      name: 'Neo',
      percentage: '+ $145.85'
    },
    {
      color: 'text-success',
      name: 'Bitcoin',
      percentage: '- $6.368'
    },
    {
      color: 'text-success',
      name: 'Ethereum',
      percentage: '+ $458.63'
    },
    {
      color: 'text-danger',
      name: 'Neo',
      percentage: '- $5.631'
    },
    {
      color: 'text-danger',
      name: 'Ripple',
      percentage: '+ $145.85'
    },
    {
      color: 'text-success',
      name: 'Bitcoin',
      percentage: '- $75.86'
    },
    {
      color: 'text-success',
      name: 'Bitcoin',
      percentage: '+ $453.63'
    },
    {
      color: 'text-danger',
      name: 'Ethereum',
      percentage: '+ $786.63'
    }
  ];

  imgList = [
    {
      src: 'assets/images/user/avatar-2.jpg'
    },
    {
      src: 'assets/images/user/avatar-3.jpg'
    },
    {
      src: 'assets/images/user/avatar-4.jpg'
    },
    {
      src: 'assets/images/user/avatar-3.jpg'
    }
  ];

  imgList1 = [
    {
      src: 'assets/images/user/avatar-2.jpg'
    },
    {
      src: 'assets/images/user/avatar-3.jpg'
    },
    {
      src: 'assets/images/user/avatar-4.jpg'
    }
  ];

  userActivity = [
    {
      src: 'assets/images/user/avatar-4.jpg',
      name: 'John Deo',
      time: '2 min ago',
      text: 'Lorem Ipsum is simply dummy text.'
    },
    {
      src: 'assets/images/user/avatar-3.jpg',
      name: 'John Deo',
      time: '2 min ago',
      text: 'Lorem Ipsum is simply dummy text.'
    },
    {
      src: 'assets/images/user/avatar-2.jpg',
      name: 'John Deo',
      time: '2 min ago',
      text: 'Lorem Ipsum is simply dummy text.'
    },
    {
      src: 'assets/images/user/avatar-1.jpg',
      name: 'John Deo',
      time: '2 min ago',
      text: 'Lorem Ipsum is simply dummy text.'
    }
  ];

  UpdateList = [
    {
      text: 'You’re getting more and more followers, keep it up!',
      user: '+ 1652 Followers',
      time: '2 hrs ago',
      icon: 'icon-twitter bg-info'
    },
    {
      text: 'Congratulations!',
      user: '+ 5 New Products were added!',
      time: '4 hrs ago',
      icon: 'icon-briefcase bg-danger'
    },
    {
      text: 'Download the latest backup',
      user: 'Database backup completed!',
      time: '1 day ago',
      icon: 'icon-check f-w-600 bg-success'
    },
    {
      text: 'This is great, keep it up!',
      user: '+2 Friend Requests',
      time: '2 day ago',
      icon: 'icon-facebook bg-primary'
    }
  ];

  projectList = [
    {
      src: 'assets/images/user/avatar-4.jpg',
      user: 'John Deo',
      position: 'Graphics Designer',
      name: 'Able Pro',
      date: 'Jun, 26',
      value: 'Low',
      color: 'bg-light-danger'
    },
    {
      src: 'assets/images/user/avatar-2.jpg',
      user: 'Jenifer Vintage',
      position: 'Web Designer',
      name: 'Mashable',
      date: 'March, 31',
      value: 'High',
      color: 'bg-light-primary'
    },
    {
      src: 'assets/images/user/avatar-3.jpg',
      user: 'William Jem',
      position: 'Developer',
      name: 'Flatable',
      date: 'Aug, 02',
      value: 'Medium',
      color: 'bg-light-success'
    },
    {
      src: 'assets/images/user/avatar-2.jpg',
      user: 'David Jones',
      position: 'Developer',
      name: 'Guruable',
      date: 'Sep, 22',
      value: 'High',
      color: 'bg-light-primary'
    }
  ];

  appSaleList = [
    {
      user: 'Able Pro',
      text: 'Powerful Admin Theme',
      sale: '16,300',
      price: '$53',
      total: '$15,652'
    },
    {
      user: 'Photoshop',
      text: 'Design Software',
      sale: '26,421',
      price: '$35',
      total: '$18,785'
    },
    {
      user: 'Guruable',
      text: 'Best Admin Template',
      sale: '8,265',
      price: '$98',
      total: '$9,652'
    },
    {
      user: 'Flatable',
      text: 'Admin App',
      sale: '10,652',
      price: '$20',
      total: '$7,856'
    }
  ];

  activeList = [
    {
      time: '12',
      src: 'assets/images/user/avatar-4.jpg',
      user: 'John Deo',
      text: '[#1183] Workaround for OS X selects printing bug',
      describtion: 'Chrome fixed the bug several versions ago, thus rendering this...'
    },
    {
      time: '16',
      src: 'assets/images/user/avatar-3.jpg',
      user: 'Jems Win',
      text: '[#1249] Vertically center carousel controls',
      describtion: 'Try any carousel control and reduce the screen width below...'
    },
    {
      time: '40',
      src: 'assets/images/user/avatar-2.jpg',
      user: 'Jeny Wiliiam',
      text: '[#1254] Inaccurate small pagination height',
      describtion: 'The height of pagination elements is not consistent with... '
    },
    {
      time: '16',
      src: 'assets/images/user/avatar-3.jpg',
      user: 'Jems Win',
      text: '[#1249] Vertically center carousel controls',
      describtion: 'Try any carousel control and reduce the screen width below...'
    }
  ];

  latestPost = [
    {
      src: 'assets/images/widget/dashborad-1.jpg'
    },
    {
      src: 'assets/images/widget/dashborad-3.jpg'
    }
  ];

  feedsList = [
    {
      text: 'You have 3 pending tasks.',
      time: 'Just Now',
      icon: 'icon-bell bg-light-primary'
    },
    {
      text: ' New order received.',
      time: '30 min ago',
      icon: 'icon-shopping-cart bg-light-danger'
    },
    {
      text: 'You have 3 pending tasks.',
      time: 'Just Now',
      icon: 'icon-file-text bg-light-success'
    },
    {
      text: 'You have 4 tasks Done.',
      time: '1 hours ago',
      icon: 'icon-bell bg-light-primary'
    },
    {
      text: 'You have 2 pending tasks.',
      time: 'Just Now',
      icon: 'icon-file-text bg-light-success'
    },
    {
      text: ' New order received.',
      time: '4 hours ago',
      icon: 'icon-shopping-cart bg-light-danger'
    },
    {
      text: 'New order Done ',
      time: 'Just Now',
      icon: 'icon-shopping-cart bg-light-danger'
    },
    {
      text: 'You have 5 pending tasks',
      time: '5 hours ago',
      icon: 'icon-file-text bg-light-success'
    },
    {
      text: 'You have 4 tasks Done.',
      time: '2 hours ago',
      icon: 'icon-bell bg-light-primary'
    }
  ];

  customersList = [
    {
      src: 'assets/images/widget/GERMANY.jpg',
      country: 'Germany',
      name: 'Anjalina Jolly',
      avrange: '56.23%'
    },
    {
      src: 'assets/images/widget/USA.jpg',
      country: 'USA',
      name: 'John Deo',
      avrange: '25.23%'
    },
    {
      src: 'assets/images/widget/AUSTRALIA.jpg',
      country: 'Australia',
      name: 'Jenifer Vintage',
      avrange: '12.45%'
    },
    {
      src: 'assets/images/widget/UK.jpg',
      country: 'United Kingdom',
      name: 'Lori Moore',
      avrange: '8.65%'
    },
    {
      src: 'assets/images/widget/BRAZIL.jpg',
      country: 'Brazilm',
      name: 'Allina D’croze',
      avrange: '3.56%%'
    },
    {
      src: 'assets/images/widget/AUSTRALIA.jpg',
      country: 'Australia',
      name: 'Jenifer Vintage',
      avrange: '12.45%'
    },
    {
      src: 'assets/images/widget/USA.jpg',
      country: 'USA',
      name: 'John Deo',
      avrange: '25.23%'
    },
    {
      src: 'assets/images/widget/UK.jpg',
      country: 'United Kingdom',
      name: 'Lori Moore',
      avrange: '8.65%'
    }
  ];

  latestOrderList = [
    {
      user: 'John Deo',
      Id: '#81412314',
      src: 'assets/images/widget/PHONE1.jpg',
      product: 'Moto G5',
      qty: '10',
      date: '17-2-2017',
      status: 'Pending',
      bgcolor: 'bg-light-warning'
    },
    {
      user: 'Jenny William',
      Id: '#68457898',
      src: 'assets/images/widget/PHONE2.jpg',
      product: 'iPhone 8',
      qty: '16',
      date: '20-2-2017',
      status: 'Paid',
      bgcolor: 'bg-light-primary'
    },
    {
      user: 'Lori Moore',
      Id: '#45457898',
      src: 'assets/images/widget/PHONE3.jpg',
      product: 'Redmi 4',
      qty: '20',
      date: '17-2-2017',
      status: 'Success',
      bgcolor: 'bg-light-success'
    },
    {
      user: 'Austin Pena',
      Id: '#62446232',
      src: 'assets/images/widget/PHONE4.jpg',
      product: 'Jio',
      qty: '15',
      date: '25-4-2017',
      status: 'Failed',
      bgcolor: 'bg-light-danger'
    }
  ];

  incomingList = [
    {
      text: 'Incoming requests',
      color: 'text-primary'
    },
    {
      text: 'You have 2 pending requests..',
      color: 'text-success'
    },
    {
      text: 'You have 3 pending requests..',
      color: 'text-danger'
    },
    {
      text: 'New order received',
      color: 'text-warning'
    },
    {
      text: 'Incoming requests',
      color: 'text-info'
    },
    {
      text: 'The 3 Golden Rules Professional Design..',
      color: 'text-success'
    },
    {
      text: 'You have 4 pending tasks',
      color: 'text-danger'
    }
  ];

  newCustomerList = [
    {
      src: 'assets/images/user/avatar-1.jpg',
      user: 'Alex Thompson',
      text: 'Cheers!',
      status: 'active'
    },
    {
      src: 'assets/images/user/avatar-2.jpg',
      user: 'John Doue',
      text: 'stay hungry stay foolish!',
      status: 'active'
    },
    {
      src: 'assets/images/user/avatar-3.jpg',
      user: 'Alex Thompson',
      text: 'Cheers!',
      status: 'deactive',
      time: '30 min ago',
      icon: 'far fa-clock'
    },
    {
      src: 'assets/images/user/avatar-4.jpg',
      user: 'John Doue',
      text: 'Cheers!',
      status: 'deactive',
      time: '10 min ago',
      icon: 'far fa-clock'
    },
    {
      src: 'assets/images/user/avatar-5.jpg',
      user: 'Shirley Hoe',
      text: 'stay hungry stay foolish!',
      status: 'active'
    },
    {
      src: 'assets/images/user/avatar-1.jpg',
      user: 'John Doue',
      text: 'Cheers!',
      status: 'active'
    },
    {
      src: 'assets/images/user/avatar-2.jpg',
      user: 'Shirley HoJames Alexander',
      text: 'stay hungry stay foolish!',
      status: 'active'
    },
    {
      src: 'assets/images/user/avatar-3.jpg',
      user: 'John Doue',
      text: 'Cheers!',
      status: 'deactive',
      time: '10 min ago',
      icon: 'far fa-clock'
    }
  ];

  recentList = [
    {
      sub: 'Website down for one week',
      department: 'Support',
      time: 'Today 2:00',
      status: 'open',
      bgcolor: ' bg-light-success'
    },
    {
      sub: 'Loosing control on server',
      department: 'Support',
      time: 'Yesterday',
      status: 'progress',
      bgcolor: 'bg-light-primary'
    },
    {
      sub: 'Authorizations keys',
      department: 'Support',
      time: '27, Aug',
      status: 'closed',
      bgcolor: 'bg-light-danger'
    },
    {
      sub: 'Restoring default settings',
      department: 'Support',
      time: 'Today 9:00',
      status: 'open',
      bgcolor: 'bg-light-success'
    },
    {
      sub: 'Loosing control on server',
      department: 'Support',
      time: 'Yesterday',
      status: 'progress',
      bgcolor: 'bg-light-primary'
    },
    {
      sub: 'Restoring default settings',
      department: 'Support',
      time: 'Today 9:00',
      status: 'progress',
      bgcolor: 'bg-light-success'
    },
    {
      sub: 'Loosing control on server',
      department: 'Support',
      time: 'Yesterday',
      status: 'progress',
      bgcolor: 'bg-light-primary'
    },
    {
      sub: 'Authorizations keys',
      department: 'Support',
      time: '27, Aug',
      status: 'closed',
      bgcolor: 'bg-light-danger'
    }
  ];
}
