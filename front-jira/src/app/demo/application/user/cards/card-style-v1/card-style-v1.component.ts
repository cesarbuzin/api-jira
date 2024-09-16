// Angular import
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// project import
import cardData from 'src/fake-data/card.json';
import { SharedModule } from 'src/app/theme/shared/shared.module';

interface cards {
  src: string;
}

@Component({
  selector: 'app-card-style-v1',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './card-style-v1.component.html',
  styleUrls: ['./card-style-v1.component.scss']
})
export default class CardStyleV1Component {
  // private Props
  cardList: cards[] = cardData;
}
