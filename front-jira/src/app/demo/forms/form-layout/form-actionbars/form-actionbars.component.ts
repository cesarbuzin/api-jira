// Angular import
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-form-actionbars',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './form-actionbars.component.html',
  styleUrls: ['./form-actionbars.component.scss']
})
export default class FormActionbarsComponent {}
