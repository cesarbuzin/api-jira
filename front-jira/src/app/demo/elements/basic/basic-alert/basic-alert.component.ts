// Angular import
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-basic-alert',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './basic-alert.component.html',
  styleUrls: ['./basic-alert.component.scss']
})
export default class BasicAlertComponent {}
