// Angular import
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// project Import
import { SharedModule } from 'src/app/theme/shared/shared.module';
import socialFriend from 'src/fake-data/social-friends.json';

interface friend {
  src: string;
  name: string;
  status: string;
  color: string;
}

@Component({
  selector: 'app-card-style-v2',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './card-style-v2.component.html',
  styleUrls: ['./card-style-v2.component.scss']
})
export default class CardStyleV2Component {
  // private props
  socialFriendsList: friend[] = socialFriend;
}
