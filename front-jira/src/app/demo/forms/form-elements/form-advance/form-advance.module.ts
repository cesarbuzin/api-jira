// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// project Import
import { FormAdvanceRoutingModule } from './form-advance-routing.module';
import { FormAdvanceComponent } from './form-advance.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';

// third party
import { TagInputModule } from 'ngx-chips';
import { FormRadioComponent } from './form-radio/form-radio.component';
import { FormSwitchComponent } from './form-switch/form-switch.component';
import { FormCheckboxComponent } from './form-checkbox/form-checkbox.component';

@NgModule({
  declarations: [FormAdvanceComponent, FormRadioComponent, FormSwitchComponent, FormCheckboxComponent],
  imports: [CommonModule, FormAdvanceRoutingModule, SharedModule, TagInputModule]
})
export class FormAdvanceModule {}
