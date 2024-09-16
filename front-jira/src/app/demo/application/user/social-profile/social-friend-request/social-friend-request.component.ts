// Angular Import
import { Component } from '@angular/core';

// project Import
import requestData from 'src/fake-data/friends-request-list.json';

interface friendRequests {
  src: string;
  name: string;
  mFriend: string;
}

@Component({
  selector: 'app-social-friend-request',
  templateUrl: './social-friend-request.component.html',
  styleUrls: ['./social-friend-request.component.scss']
})
export class SocialFriendRequestComponent {
  // project Props
  friendRequest: friendRequests[] = requestData;
}
