import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OriginePage } from './origine.page';

const routes: Routes = [
  {
    path: '',
    component: OriginePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OriginePageRoutingModule {}
