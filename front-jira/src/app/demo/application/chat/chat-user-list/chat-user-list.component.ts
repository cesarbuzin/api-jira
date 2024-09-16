import { Component } from '@angular/core';

// Project imports
import personData from 'src/fake-data/chat-person.json';

@Component({
  selector: 'app-chat-user-list',
  templateUrl: './chat-user-list.component.html',
  styleUrls: ['./chat-user-list.component.scss']
})
export class ChatUserListComponent {
  // Private methods
  person = personData;
}
