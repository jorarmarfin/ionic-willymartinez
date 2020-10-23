import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RosarioPage } from './rosario.page';

const routes: Routes = [
  {
    path: '',
    component: RosarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RosarioPageRoutingModule {}
