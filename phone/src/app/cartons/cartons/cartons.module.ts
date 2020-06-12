import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartonsPageRoutingModule } from './cartons-routing.module';

import { CartonsPage } from './cartons.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartonsPageRoutingModule
  ],
  declarations: [CartonsPage]
})
export class CartonsPageModule {}
