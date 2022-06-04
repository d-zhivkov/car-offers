import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from 'src/app/modules/core/components/not-found/not-found.component';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';

const routes: Routes = [
  {
      path: '',
      pathMatch: 'full',
      component: ContactFormComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
