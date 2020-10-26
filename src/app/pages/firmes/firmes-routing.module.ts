import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirmesPage } from './firmes.page';

const routes: Routes = [
  {
    path: '',
    component: FirmesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirmesPageRoutingModule {}
