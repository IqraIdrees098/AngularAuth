import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaunchedPageRoutingModule } from './launched-routing.module';

import { LaunchedPage } from './launched.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaunchedPageRoutingModule
  ],
  declarations: [LaunchedPage]
})
export class LaunchedPageModule {}
