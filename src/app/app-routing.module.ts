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
    path: 'biografia',
    loadChildren: () => import('./pages/biografia/biografia.module').then( m => m.BiografiaPageModule)
  },
  {
    path: 'promesas',
    loadChildren: () => import('./pages/promesas/promesas.module').then( m => m.PromesasPageModule)
  },
  {
    path: 'rosario',
    loadChildren: () => import('./pages/rosario/rosario.module').then( m => m.RosarioPageModule)
  },
  {
    path: 'predicas',
    loadChildren: () => import('./pages/predicas/predicas.module').then( m => m.PredicasPageModule)
  },
  {
    path: 'libros',
    loadChildren: () => import('./pages/libros/libros.module').then( m => m.LibrosPageModule)
  },
  {
    path: 'biblia',
    loadChildren: () => import('./pages/biblia/biblia.module').then( m => m.BibliaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
