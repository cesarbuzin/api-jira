// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Project imports
import { CardsRoutingModule } from './cards-routing.module';
import { CardsComponent } from '../cards/cards.component';
import { CardOffcanvasComponent } from './card-offcanvas/card-offcanvas.component';
import { CardContentComponent } from './card-content/card-content.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';

// Third party
import { TagInputModule } from 'ngx-chips';

@NgModule({
  declarations: [CardsComponent, CardOffcanvasComponent, CardContentComponent],
  imports: [CommonModule, CardsRoutingModule, SharedModule, TagInputModule]
})
export class CardsModule {}
