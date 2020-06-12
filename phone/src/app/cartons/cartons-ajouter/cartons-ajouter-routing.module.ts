import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartonsAjouterPage } from './cartons-ajouter.page';

const routes: Routes = [
  {
    path: '',
    component: CartonsAjouterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartonsAjouterPageRoutingModule {}
