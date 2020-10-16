import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PromesasPage } from './promesas.page';

const routes: Routes = [
  {
    path: '',
    component: PromesasPage
  },
  {
    path: 'promesa',
    loadChildren: () => import('./promesa/promesa.module').then( m => m.PromesaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PromesasPageRoutingModule {}
