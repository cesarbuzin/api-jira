// Angular import
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-crt-radial',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './crt-radial.component.html',
  styleUrls: ['./crt-radial.component.scss']
})
export default class CrtRadialComponent {}
