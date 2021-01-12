import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScheduleListingPageRoutingModule } from './schedule-listing-routing.module';

import { ScheduleListingPage } from './schedule-listing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScheduleListingPageRoutingModule
  ],
  declarations: [ScheduleListingPage]
})
export class ScheduleListingPageModule {}
