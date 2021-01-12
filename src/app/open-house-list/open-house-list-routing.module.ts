import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpenHouseListPage } from './open-house-list.page';

const routes: Routes = [
  {
    path: '',
    component: OpenHouseListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpenHouseListPageRoutingModule {}
