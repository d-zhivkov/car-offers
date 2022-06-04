import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from 'src/app/modules/core/components/not-found/not-found.component';
import { DetailsComponent } from '../../components/details/details.component';
import { ListComponent } from '../../components/list/list.component';

const routes: Routes = [
  {
      path: '',
      pathMatch: 'full',
      component: ListComponent
  },
  {
    path: ':id',
    component: DetailsComponent
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
export class OffersRoutingModule { }
