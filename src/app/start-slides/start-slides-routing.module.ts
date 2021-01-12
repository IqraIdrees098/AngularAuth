import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartSlidesPage } from './start-slides.page';

const routes: Routes = [
  {
    path: '',
    component: StartSlidesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartSlidesPageRoutingModule {}
