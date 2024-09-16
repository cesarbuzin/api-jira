// Angular import
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';

export interface FormModel {
  captcha?: string;
}

@Component({
  selector: 'app-re-captcha',
  standalone: true,
  imports: [CommonModule, SharedModule, RecaptchaModule, RecaptchaFormsModule],
  templateUrl: './re-captcha.component.html',
  styleUrls: ['./re-captcha.component.scss']
})
export default class ReCaptchaComponent {
  // private props
  captcha?: string;
  formModel: FormModel = {};
}
