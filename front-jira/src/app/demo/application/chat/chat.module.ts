// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Project imports
import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { ChatUserListComponent } from './chat-user-list/chat-user-list.component';

@NgModule({
  declarations: [ChatComponent, ChatBoxComponent, ChatUserListComponent],
  imports: [CommonModule, ChatRoutingModule, SharedModule]
})
export class ChatModule {}
