import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScheduleListingPage } from './schedule-listing.page';

const routes: Routes = [
  {
    path: '',
    component: ScheduleListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScheduleListingPageRoutingModule {}
