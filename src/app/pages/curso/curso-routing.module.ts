import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursoPage } from './curso.page';

const routes: Routes = [
  {
    path: '',
    component: CursoPage
  },
  {
    path: 'modalcurso',
    loadChildren: () => import('./modalcurso/modalcurso.module').then( m => m.ModalcursoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursoPageRoutingModule {}
