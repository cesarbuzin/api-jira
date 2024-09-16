// Angular import
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-v3-fr-password',
  standalone: true,
  imports: [CommonModule, RouterModule, SharedModule],
  templateUrl: './v3-fr-password.component.html',
  styleUrls: ['./v3-fr-password.component.scss']
})
export default class V3FrPasswordComponent {}
