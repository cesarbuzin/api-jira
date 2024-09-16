// Angular import
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-advance-modal',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './advance-modal.component.html',
  styleUrls: ['./advance-modal.component.scss']
})
export default class AdvanceModalComponent {
  // private Method
  openMyModal(event: string) {
    document.querySelector('#' + event)?.classList.add('md-show');
  }

  closeMyModal(event: {
    target: { parentElement: { parentElement: { parentElement: { classList: { remove: (arg0: string) => void } } } } };
  }) {
    event.target.parentElement.parentElement.parentElement.classList.remove('md-show');
  }
}
