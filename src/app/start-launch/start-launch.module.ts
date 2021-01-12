import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartLaunchPageRoutingModule } from './start-launch-routing.module';

import { StartLaunchPage } from './start-launch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartLaunchPageRoutingModule
  ],
  declarations: [StartLaunchPage]
})
export class StartLaunchPageModule {}
