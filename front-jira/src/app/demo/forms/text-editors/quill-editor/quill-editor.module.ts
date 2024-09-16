// angular import
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// project import
import { QuillEditorRoutingModule } from './quill-editor-routing.module';
import { QuillEditorComponent } from './quill-editor.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';

// third Party
import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [QuillEditorComponent],
  imports: [CommonModule, QuillEditorRoutingModule, SharedModule, QuillModule.forRoot()]
})
export class QuillEditorModule {}
