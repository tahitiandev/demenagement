import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'types',
    loadChildren: () => import('./parametrages/types/types.module').then( m => m.TypesPageModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./parametrages/users/users.module').then( m => m.UsersPageModule)
  },
  {
    path: 'destination',
    loadChildren: () => import('./parametrages/destination/destination.module').then( m => m.DestinationPageModule)
  },
  {
    path: 'origine',
    loadChildren: () => import('./parametrages/origine/origine.module').then( m => m.OriginePageModule)
  },
  {
    path: 'users-detail/:idusers',
    loadChildren: () => import('./parametrages/users-detail/users-detail.module').then( m => m.UsersDetailPageModule)
  },
  {
    path: 'cartons-ajouter',
    loadChildren: () => import('./cartons/cartons-ajouter/cartons-ajouter.module').then( m => m.CartonsAjouterPageModule)
  },
  {
    path: 'cartons',
    loadChildren: () => import('./cartons/cartons/cartons.module').then( m => m.CartonsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
