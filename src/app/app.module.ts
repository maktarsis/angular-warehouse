import { NgModule } from '@angular/core';
import {
  BrowserModule,
  BrowserTransferStateModule
} from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '~env/environment';
import { AppComponent } from '~app/app.component';
import { CoreModule } from '-core/core.module';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'app-root' }),
    BrowserTransferStateModule,
    CoreModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
