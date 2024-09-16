// Angular Import
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.scss']
})
export class CardContentComponent {
  // Private props
  @Input() list1 = false;
  @Input() list2 = false;
  @Input() list3 = false;

  // Private methods
  ContactList = [
    {
      src: 'assets/images/user/avatar-5.jpg',
      name: 'Alene',
      position: 'Sr. Customer Manager',
      email: 'claudia_kuhn@yahoo.com',
      number: '380-293-0177',
      location: 'Port Narcos'
    },
    {
      src: 'assets/images/user/avatar-4.jpg',
      name: 'Agilulf Fuxg',
      position: 'Specialist',
      email: 'agilulf_fuxg_work@gmil.com',
      number: '380-293-0177',
      location: 'Antigua and Barbuda'
    },
    {
      src: 'assets/images/user/avatar-3.jpg',
      name: 'Adaline Bergfalks',
      position: 'Shaper',
      email: 'adaline_bergfalks_work@gmil.com',
      number: '380-293-0177',
      location: 'Argentina'
    }
  ];

  ContactList1 = [
    {
      src: 'assets/images/user/avatar-2.jpg',
      name: 'Keefe',
      position: 'Dynamic Operations Officer',
      email: 'keefe_work@gmil.com',
      number: '380-293-0177',
      location: 'Albania'
    }
  ];

  ContactList2 = [
    {
      src: 'assets/images/user/avatar-1.jpg',
      name: 'Lazaro',
      position: 'Resource Investigator',
      email: 'lazaro_work@gmil.com',
      number: '380-293-0177',
      location: 'Albania'
    }
  ];
}
