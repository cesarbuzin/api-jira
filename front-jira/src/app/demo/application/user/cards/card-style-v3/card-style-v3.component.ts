// Angular import
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// project Import
import blogData from 'src/fake-data/blog-card.json';
import { SharedModule } from 'src/app/theme/shared/shared.module';

interface cardList {
  src: string;
  img: string;
  description: string;
  name: string;
  status: string;
  color: string;
}

@Component({
  selector: 'app-card-style-v3',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './card-style-v3.component.html',
  styleUrls: ['./card-style-v3.component.scss']
})
export default class CardStyleV3Component {
  // private Props
  ImgCardList: cardList[] = blogData;
}
