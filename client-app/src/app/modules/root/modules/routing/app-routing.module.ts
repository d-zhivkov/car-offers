import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from 'src/app/modules/core/components/not-found/not-found.component';

import { DashboardComponent } from '../../components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DashboardComponent
  },
  {
    path: 'offers',
    loadChildren: () => import('src/app/modules/offers/offers.module').then(m => m.OffersModule)
  },
  {
    path: 'about',
    loadComponent: () => import('src/app/modules/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'contacts',
    loadChildren: () => import('src/app/modules/contacts/contacts.module').then(m => m.ContactsModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
