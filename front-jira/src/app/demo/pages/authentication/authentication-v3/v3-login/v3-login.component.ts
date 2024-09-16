// Angular import
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-v3-login',
  standalone: true,
  imports: [CommonModule, RouterModule, SharedModule],
  templateUrl: './v3-login.component.html',
  styleUrls: ['./v3-login.component.scss']
})
export default class V3LoginComponent {}
