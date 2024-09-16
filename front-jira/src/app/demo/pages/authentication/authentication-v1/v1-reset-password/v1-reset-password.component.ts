// Angular import
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-v1-reset-password',
  standalone: true,
  imports: [CommonModule, RouterModule, SharedModule],
  templateUrl: './v1-reset-password.component.html',
  styleUrls: ['./v1-reset-password.component.scss']
})
export default class V1ResetPasswordComponent {}
