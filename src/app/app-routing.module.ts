import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'asambleas',
    loadChildren: () => import('./pages/asambleas/asambleas.module').then( m => m.AsambleasPageModule)
  },
  {
    path: 'biografia',
    loadChildren: () => import('./pages/biografia/biografia.module').then( m => m.BiografiaPageModule)
  },
  {
    path: 'asamblea',
    loadChildren: () => import('./pages/asamblea/asamblea.module').then( m => m.AsambleaPageModule)
  },
  {
    path: 'promesas',
    loadChildren: () => import('./pages/promesas/promesas.module').then( m => m.PromesasPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
