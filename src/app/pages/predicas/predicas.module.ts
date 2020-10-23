import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PredicasPageRoutingModule } from './predicas-routing.module';

import { PredicasPage } from './predicas.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PredicasPageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [PredicasPage]
})
export class PredicasPageModule {}
