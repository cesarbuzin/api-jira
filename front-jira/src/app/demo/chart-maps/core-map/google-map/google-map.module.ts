// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//project Import
import { GoogleMapRoutingModule } from './google-map-routing.module';
import { GoogleMapComponent } from './google-map.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';

// third party
import { NgMapsCoreModule } from '@ng-maps/core';
import { NgMapsGoogleModule, GOOGLE_MAPS_API_CONFIG } from '@ng-maps/google';

@NgModule({
  declarations: [GoogleMapComponent],
  imports: [CommonModule, GoogleMapRoutingModule, SharedModule, NgMapsCoreModule, NgMapsGoogleModule],
  providers: [
    {
      provide: GOOGLE_MAPS_API_CONFIG,
      useValue: {
        apiKey: 'AIzaSyAChufWiMfwsmyX3Se1dRaN4t31z0xmIMo&v'
      }
    }
  ]
})
export class GoogleMapModule {}
