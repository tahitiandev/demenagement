import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateUsersComponent } from './general/users/update-users/update-users.component';
import { UsersComponent } from './general/users/users/users.component';
import { ViewTypeComponent } from './parametrages/types/view-type/view-type.component';
import { HomeComponent } from './general/home/home.component';
import { ContainerTypeComponent } from './parametrages/types/container-type/container-type.component';

const routes: Routes = [
  { path : '', component : HomeComponent },
  { path : 'users', component : UsersComponent },
  { path : 'users/:id', component : UpdateUsersComponent },
  { path : 'types', component : ContainerTypeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
