// Angular Import
import { Component, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

// third party
import { TagInputModule } from 'ngx-chips';

// Bootstrap imports
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule, SharedModule, TagInputModule],
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export default class ContactListComponent {
  // Private props
  closeResult = 'string';

  // Constructor
  constructor(private offcanvasService: NgbOffcanvas) {}

  // Private methods
  contactDetail(content: TemplateRef<string>) {
    this.offcanvasService.open(content, { position: 'end' });
  }

  editContactDetail(content1: TemplateRef<string>) {
    this.offcanvasService.open(content1, { position: 'end' });
  }

  addList = [
    {
      name: 'Name',
      icon: 'account_circle',
      placeholder: 'Enter Name'
    },
    {
      name: 'Company',
      icon: 'business',
      placeholder: 'Enter Company'
    },
    {
      name: 'Job Title',
      icon: 'work',
      placeholder: 'Enter Job Title'
    },
    {
      name: 'Email',
      icon: 'email',
      placeholder: 'Enter Email'
    },
    {
      name: 'Phone Number',
      icon: 'call',
      placeholder: 'Enter Phone Number'
    }
  ];

  contactList = [
    {
      src: 'assets/images/user/avatar-5.jpg',
      name: 'Alene',
      position: 'Sr. Customer Manager'
    },
    {
      src: 'assets/images/user/avatar-4.jpg',
      name: 'Agilulf Fuxg',
      position: 'Specialist'
    },
    {
      src: 'assets/images/user/avatar-3.jpg',
      name: 'Adaline Bergfalks',
      position: 'Shaper'
    },
    {
      src: 'assets/images/user/avatar-3.jpg',
      name: 'Adaline Bergfalks',
      position: 'Shaper'
    }
  ];

  contactList1 = [
    {
      src: 'assets/images/user/avatar-2.jpg',
      name: 'Keefe',
      position: 'Dynamic Operations Officer'
    }
  ];

  contactList2 = [
    {
      src: 'assets/images/user/avatar-1.jpg',
      name: 'Lazaro',
      position: 'Resource Investigator'
    }
  ];

  taskList = [
    {
      name: 'business',
      describe: 'ABC Pvt Ltd'
    },
    {
      name: 'work',
      describe: 'Sr. Customer Manager'
    },
    {
      name: 'email',
      describe: 'alene_work@company.com',
      office: 'Work',
      email: 'alene@company.com',
      personal: 'Personal'
    },
    {
      name: 'call',
      describe: '380-293-0177',
      office: 'Work',
      email: '380-293-0177',
      personal: 'Personal'
    },
    {
      name: 'pin_drop',
      describe: 'Port Narcos'
    },
    {
      name: 'cake',
      describe: 'November 30, 1997'
    },
    {
      name: 'info',
      describe: 'Happy Birthday Alene'
    }
  ];
}
