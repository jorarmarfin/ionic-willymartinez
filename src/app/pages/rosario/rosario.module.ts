import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RosarioPageRoutingModule } from './rosario-routing.module';

import { RosarioPage } from './rosario.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RosarioPageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [RosarioPage]
})
export class RosarioPageModule {}
