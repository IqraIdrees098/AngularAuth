import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpenHouseListPageRoutingModule } from './open-house-list-routing.module';

import { OpenHouseListPage } from './open-house-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpenHouseListPageRoutingModule
  ],
  declarations: [OpenHouseListPage]
})
export class OpenHouseListPageModule {}
