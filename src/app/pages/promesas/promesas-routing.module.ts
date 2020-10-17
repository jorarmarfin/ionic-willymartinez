import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PromesasPage } from './promesas.page';

const routes: Routes = [
  {
    path: '',
    component: PromesasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PromesasPageRoutingModule {}
