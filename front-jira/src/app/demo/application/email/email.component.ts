// Angular import
import { Component, ElementRef } from '@angular/core';

// bootstrap import
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent {
  // private props
  closeResult = '';
  isCollapsed = true;
  isCollapsed1 = false;
  mailListHight!: boolean;
  starListMail!: boolean;

  // Constructor
  constructor(private modalService: NgbModal) {}

  // private Method
  OpenCompose(content: ElementRef) {
    this.modalService.open(content, { centered: true });
  }
}
