// Angular import
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-theme-vertical',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './theme-vertical.component.html',
  styleUrls: ['./theme-vertical.component.scss']
})
export default class ThemeVerticalComponent {}
