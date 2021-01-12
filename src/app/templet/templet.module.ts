import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TempletPageRoutingModule } from './templet-routing.module';

import { TempletPage } from './templet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TempletPageRoutingModule
  ],
  declarations: [TempletPage]
})
export class TempletPageModule {}
