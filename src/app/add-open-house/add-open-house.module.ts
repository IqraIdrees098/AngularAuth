import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddOpenHousePageRoutingModule } from './add-open-house-routing.module';

import { AddOpenHousePage } from './add-open-house.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddOpenHousePageRoutingModule
  ],
  declarations: [AddOpenHousePage]
})
export class AddOpenHousePageModule {}
