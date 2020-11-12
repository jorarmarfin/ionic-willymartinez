import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProxPage } from './prox.page';

const routes: Routes = [
  {
    path: '',
    component: ProxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProxPageRoutingModule {}
