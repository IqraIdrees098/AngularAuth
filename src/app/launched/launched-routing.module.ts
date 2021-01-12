import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaunchedPage } from './launched.page';

const routes: Routes = [
  {
    path: '',
    component: LaunchedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaunchedPageRoutingModule {}
