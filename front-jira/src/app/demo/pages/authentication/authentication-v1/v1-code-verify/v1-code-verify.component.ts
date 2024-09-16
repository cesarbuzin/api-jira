// Angular import
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-v1-code-verify',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './v1-code-verify.component.html',
  styleUrls: ['./v1-code-verify.component.scss']
})
export default class V1CodeVerifyComponent {}
