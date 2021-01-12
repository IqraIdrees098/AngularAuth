import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseTemplatePageRoutingModule } from './choose-template-routing.module';

import { ChooseTemplatePage } from './choose-template.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooseTemplatePageRoutingModule
  ],
  declarations: [ChooseTemplatePage]
})
export class ChooseTemplatePageModule {}
