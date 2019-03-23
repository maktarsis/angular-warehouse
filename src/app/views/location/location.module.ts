import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '+shared/shared.module';
import { locationRouting } from '-location/hub/location.routes';
import { MarkerDirective } from '-location/shared/marker.directive';
import { LocationComponent } from '-location/containers/location/location.component';
import { LocationMapComponent } from '-location/components/location-map/location-map.component';
import { LocationStocklistComponent } from '-location/components/location-stocklist/location-stocklist.component';

@NgModule({
  imports: [CommonModule, FormsModule, locationRouting, SharedModule],
  declarations: [
    LocationMapComponent,
    MarkerDirective,
    LocationComponent,
    LocationStocklistComponent
  ]
})
export class LocationModule {}
