// Angular import
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-v3-check-mail',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './v3-check-mail.component.html',
  styleUrls: ['./v3-check-mail.component.scss']
})
export default class V3CheckMailComponent {}
