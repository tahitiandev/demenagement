import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OriginePageRoutingModule } from './origine-routing.module';

import { OriginePage } from './origine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OriginePageRoutingModule
  ],
  declarations: [OriginePage]
})
export class OriginePageModule {}
