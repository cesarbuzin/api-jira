import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SamplePageRoutingModule } from './componentes-routing.module';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [
  ],
  imports: [CommonModule, SamplePageRoutingModule, SharedModule]
})
export class ComponentesModule {}
