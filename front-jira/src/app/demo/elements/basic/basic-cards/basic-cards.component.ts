// Angular import
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-basic-cards',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './basic-cards.component.html',
  styleUrls: ['./basic-cards.component.scss']
})
export default class BasicCardsComponent {}
