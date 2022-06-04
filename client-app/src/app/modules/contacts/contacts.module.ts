import { NgModule } from '@angular/core';

import { CoreModule } from '../core/core.module';
import { ContactRoutingModule } from './modules/routing/contact-routing.module';

import { ContactFormComponent } from './components/contact-form/contact-form.component';

@NgModule({
  declarations: [
    ContactFormComponent
  ],
  imports: [
    CoreModule,
    ContactRoutingModule
  ]
})
export class ContactsModule { }
