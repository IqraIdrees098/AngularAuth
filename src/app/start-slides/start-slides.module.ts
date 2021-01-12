import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartSlidesPageRoutingModule } from './start-slides-routing.module';

import { StartSlidesPage } from './start-slides.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartSlidesPageRoutingModule
  ],
  declarations: [StartSlidesPage]
})
export class StartSlidesPageModule {}
