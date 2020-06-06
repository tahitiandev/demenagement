import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './general/users/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { CrudUsersComponent } from './general/users/crud-users/crud-users.component';
import { UpdateUsersComponent } from './general/users/update-users/update-users.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { ViewTypeComponent } from './parametrages/types/view-type/view-type.component';
import { CruTypeComponent } from './parametrages/types/cru-type/cru-type.component';
import { ContainerTypeComponent } from './parametrages/types/container-type/container-type.component';
import { HomeComponent } from './general/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CrudUsersComponent,
    UpdateUsersComponent,
    NavbarComponent,
    ViewTypeComponent,
    CruTypeComponent,
    ContainerTypeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
