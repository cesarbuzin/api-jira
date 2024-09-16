// Angular Import
// Angular import
import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';

// third party
import { FileUploadValidators, FileUploadModule } from '@iplab/ngx-file-upload';

@Component({
  selector: 'app-file-dropzone',
  standalone: true,
  imports: [CommonModule, SharedModule, FileUploadModule],
  templateUrl: './file-dropzone.component.html',
  styleUrls: ['./file-dropzone.component.scss']
})
export default class FileDropzoneComponent {
  // private Props
  private filesControl = new UntypedFormControl(null, FileUploadValidators.filesLimit(2));

  demoForm = new UntypedFormGroup({
    files: this.filesControl
  });

  // private method
  toggleStatus() {
    this.filesControl.disabled ? this.filesControl.enable() : this.filesControl.disable();
  }
}
