import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseTemplatePage } from './choose-template.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseTemplatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseTemplatePageRoutingModule {}
