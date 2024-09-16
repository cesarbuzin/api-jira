import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { UiSwitchModule } from 'ngx-ui-switch';
import { FrmSwitchModule } from './public_api';

@Component({
  selector: 'app-frm-switch',
  standalone: true,
  imports: [CommonModule, SharedModule, UiSwitchModule, FrmSwitchModule],
  templateUrl: './frm-switch.component.html',
  styleUrls: ['./frm-switch.component.scss']
})
export default class FrmSwitchComponent {
  // private props
  submitted = false;
  enable = true;
  enableFeature = false;
  count = 0;
  change = false;
  valueChange = false;
  changeEvent!: MouseEvent;
  isLoading = false;
  fakeAsync: Observable<boolean> = new Observable((observer) => {
    this.isLoading = true;
    const timeout = setTimeout(() => {
      this.isLoading = false;
      observer.next(true);
    }, 2000);
    return () => clearTimeout(timeout);
  });

  @ViewChild('demoForm') demoForm!: NgForm;

  // private method
  onSubmit() {
    this.submitted = true;
  }

  onChange(value: boolean) {
    this.count++;
    this.change = value;
  }

  onChangeEvent(event: MouseEvent) {
    this.changeEvent = event;
  }

  onValueChange(value: boolean) {
    this.valueChange = value;
  }
}
