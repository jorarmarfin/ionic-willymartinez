import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalcursoPage } from './modalcurso.page';

const routes: Routes = [
  {
    path: '',
    component: ModalcursoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalcursoPageRoutingModule {}
