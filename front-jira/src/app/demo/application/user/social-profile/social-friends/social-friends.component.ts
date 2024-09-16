// Angular Import
import { Component } from '@angular/core';
import friendData from 'src/fake-data/friend-list.json';

interface friends {
  src: string;
  name: string;
  location: string;
}

@Component({
  selector: 'app-social-friends',
  templateUrl: './social-friends.component.html',
  styleUrls: ['./social-friends.component.scss']
})
export class SocialFriendsComponent {
  // public props
  friendList: friends[] = friendData;
}
