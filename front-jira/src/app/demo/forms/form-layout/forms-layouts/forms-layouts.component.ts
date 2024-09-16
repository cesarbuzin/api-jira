// Angular import
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-forms-layouts',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './forms-layouts.component.html',
  styleUrls: ['./forms-layouts.component.scss']
})
export default class FormsLayoutsComponent {}
