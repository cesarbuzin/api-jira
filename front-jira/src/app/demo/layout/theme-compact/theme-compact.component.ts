// Angular import
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-theme-compact',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './theme-compact.component.html',
  styleUrls: ['./theme-compact.component.scss']
})
export default class ThemeCompactComponent {}
