// Angular import
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-prv-policy',
  standalone: true,
  imports: [CommonModule, RouterModule, SharedModule],
  templateUrl: './prv-policy.component.html',
  styleUrls: ['./prv-policy.component.scss']
})
export default class PrvPolicyComponent {
  // public props
  isCollapsed = true;
}
