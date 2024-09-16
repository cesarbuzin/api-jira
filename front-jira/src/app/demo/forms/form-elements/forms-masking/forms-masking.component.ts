// Angular import
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
// third party
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-forms-masking',
  standalone: true,
  imports: [CommonModule, SharedModule, NgxMaskDirective, NgxMaskPipe],
  templateUrl: './forms-masking.component.html',
  styleUrls: ['./forms-masking.component.scss'],
  providers: [provideNgxMask()]
})
export default class FormsMaskingComponent {}
