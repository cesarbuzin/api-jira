// Angular import
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-basic-spinner',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './basic-spinner.component.html',
  styleUrls: ['./basic-spinner.component.scss']
})
export default class BasicSpinnerComponent {}
