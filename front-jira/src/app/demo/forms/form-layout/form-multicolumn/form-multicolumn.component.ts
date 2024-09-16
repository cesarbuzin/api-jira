// Angular import
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-form-multicolumn',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './form-multicolumn.component.html',
  styleUrls: ['./form-multicolumn.component.scss']
})
export default class FormMulticolumnComponent {}
