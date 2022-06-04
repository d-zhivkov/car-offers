import { NgModule } from '@angular/core';

import { CoreModule } from '../core/core.module';
import { OffersRoutingModule } from './modules/routing/offers-routing.module';

import { ListComponent } from './components/list/list.component';
import { DetailsComponent } from './components/details/details.component';

import { OffersService } from './services/offers.service';

@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent
  ],
  imports: [
    CoreModule,
    OffersRoutingModule
  ],
  providers: [
    OffersService
  ]
})
export class OffersModule { }
