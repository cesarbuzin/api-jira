// Angular import
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-v1-register',
  standalone: true,
  imports: [CommonModule, RouterModule, SharedModule],
  templateUrl: './v1-register.component.html',
  styleUrls: ['./v1-register.component.scss']
})
export default class V1RegisterComponent {}
