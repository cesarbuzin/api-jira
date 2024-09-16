// Angular import
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-v1-fr-password',
  standalone: true,
  imports: [CommonModule, SharedModule, RouterModule],
  templateUrl: './v1-fr-password.component.html',
  styleUrls: ['./v1-fr-password.component.scss']
})
export default class V1FrPasswordComponent {}
