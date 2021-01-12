import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddOpenHousePage } from './add-open-house.page';

const routes: Routes = [
  {
    path: '',
    component: AddOpenHousePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddOpenHousePageRoutingModule {}
