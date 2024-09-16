// Angular Imports
import { Component, TemplateRef } from '@angular/core';

// Bootstrap
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  // Constructor
  constructor(private offcanvasService: NgbOffcanvas) {}

  // Public methods
  addContact(content: TemplateRef<string>) {
    this.offcanvasService.open(content, { position: 'end' });
  }
}
