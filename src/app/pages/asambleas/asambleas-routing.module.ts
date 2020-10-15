import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsambleasPage } from './asambleas.page';

const routes: Routes = [
  {
    path: '',
    component: AsambleasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsambleasPageRoutingModule {}
