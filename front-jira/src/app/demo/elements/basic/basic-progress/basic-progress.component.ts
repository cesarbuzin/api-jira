// Angular import
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-basic-progress',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './basic-progress.component.html',
  styleUrls: ['./basic-progress.component.scss']
})
export default class BasicProgressComponent {}
