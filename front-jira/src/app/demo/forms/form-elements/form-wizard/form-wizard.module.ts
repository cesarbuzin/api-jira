// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// project import
import { FormWizardRoutingModule } from './form-wizard-routing.module';
import { FormWizardComponent } from './form-wizard.component';
import { WizardBasicComponent } from './wizard-basic/wizard-basic.component';
import { WizardCustomComponent } from './wizard-custom/wizard-custom.component';
import { WizardNavbarLeftComponent } from './wizard-navbar-left/wizard-navbar-left.component';
import { WizardNavbarLgComponent } from './wizard-navbar-lg/wizard-navbar-lg.component';
import { WizardNavbarLgIconComponent } from './wizard-navbar-lg-icon/wizard-navbar-lg-icon.component';
import { WizardNavbarRightComponent } from './wizard-navbar-right/wizard-navbar-right.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';

// third party
import { ArchwizardModule } from 'angular-archwizard';

@NgModule({
  declarations: [
    FormWizardComponent,
    WizardBasicComponent,
    WizardCustomComponent,
    WizardNavbarLeftComponent,
    WizardNavbarLgComponent,
    WizardNavbarLgIconComponent,
    WizardNavbarRightComponent
  ],
  imports: [CommonModule, FormWizardRoutingModule, SharedModule, ArchwizardModule]
})
export class FormWizardModule {}
