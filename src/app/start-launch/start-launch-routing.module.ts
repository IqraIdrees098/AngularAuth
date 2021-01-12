import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartLaunchPage } from './start-launch.page';

const routes: Routes = [
  {
    path: '',
    component: StartLaunchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartLaunchPageRoutingModule {}
