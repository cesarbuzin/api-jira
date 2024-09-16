// Angular import
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, RouterModule, SharedModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export default class FaqComponent {
  // public props

  isCollapsed = true;
}
