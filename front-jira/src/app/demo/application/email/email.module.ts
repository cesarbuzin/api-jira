// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// project Import
import { EmailRoutingModule } from './email-routing.module';
import { EmailComponent } from './email.component';
import { MailComponent } from './mail/mail.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';

// third Party
import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [EmailComponent, MailComponent],
  imports: [CommonModule, EmailRoutingModule, SharedModule, QuillModule.forRoot()]
})
export class EmailModule {}
