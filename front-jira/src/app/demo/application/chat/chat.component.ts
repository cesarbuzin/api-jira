// Angular import
import { Component, TemplateRef } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

// Project imports
import personData from 'src/fake-data/chat-person.json';

interface persons {
  src: string;
  name: string;
  time: string;
  department: string;
  message: string;
  status: string;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  constructor(private offcanvasService: NgbOffcanvas) {}

  // Private props
  isCollapsed = false;
  listIsCollapsed = true;

  // Private methods
  person: persons[] = personData;

  information = [
    {
      text: '32188 Sips Parkways, U.S',
      icon: 'pin_drop'
    },
    {
      text: '995-250-1803',
      icon: 'call'
    },
    {
      text: 'O’Keefe@codedtheme.com',
      icon: 'email'
    }
  ];

  friends = [
    {
      src: 'assets/images/application/img-catalog1.png'
    },
    {
      src: 'assets/images/application/img-catalog2.png'
    },
    {
      src: 'assets/images/application/img-catalog3.png'
    }
  ];

  open(content: TemplateRef<string>) {
    this.offcanvasService.open(content, { position: 'start' });
  }

  openInfo(content1: TemplateRef<string>) {
    this.offcanvasService.open(content1, { position: 'end' });
  }
}
