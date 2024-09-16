// Angular import
import { Component } from '@angular/core';

// project Import
import followerData from 'src/fake-data/follower-list.json';

interface followers {
  src: string;
  name: string;
  location: string;
  status: string;
}

@Component({
  selector: 'app-social-followers',
  templateUrl: './social-followers.component.html',
  styleUrls: ['./social-followers.component.scss']
})
export class SocialFollowersComponent {
  // public props
  followerList: followers[] = followerData;
}
