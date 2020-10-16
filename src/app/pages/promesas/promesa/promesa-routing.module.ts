import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PromesaPage } from './promesa.page';

const routes: Routes = [
  {
    path: '',
    component: PromesaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PromesaPageRoutingModule {}
