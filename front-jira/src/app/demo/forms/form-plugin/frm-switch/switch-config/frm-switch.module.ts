// Angular Import
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// project Import
import { SwitchConfigComponent } from './switch-config.component';
import { UI_SWITCH_OPTIONS } from './ui-switch.token';
import { UiSwitchModuleConfig } from './ui-switch.config';

@NgModule({
  declarations: [SwitchConfigComponent],
  imports: [CommonModule, FormsModule],
  exports: [FormsModule, SwitchConfigComponent]
})
export class FrmSwitchModule {
  static forRoot(config: UiSwitchModuleConfig | null | undefined): ModuleWithProviders<FrmSwitchModule> {
    return {
      ngModule: FrmSwitchModule,
      providers: [{ provide: UI_SWITCH_OPTIONS, useValue: config || {} }]
    };
  }
}
