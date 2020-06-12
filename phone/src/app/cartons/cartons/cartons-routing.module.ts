import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartonsPage } from './cartons.page';

const routes: Routes = [
  {
    path: '',
    component: CartonsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartonsPageRoutingModule {}
