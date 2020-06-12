import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartonsAjouterPageRoutingModule } from './cartons-ajouter-routing.module';

import { CartonsAjouterPage } from './cartons-ajouter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartonsAjouterPageRoutingModule
  ],
  declarations: [CartonsAjouterPage]
})
export class CartonsAjouterPageModule {}
