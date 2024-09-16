// Angular import
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-coming-soon-v1',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './coming-soon-v1.component.html',
  styleUrls: ['./coming-soon-v1.component.scss']
})
export default class ComingSoonV1Component {}
