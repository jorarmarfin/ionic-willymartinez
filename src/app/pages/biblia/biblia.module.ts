import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BibliaPageRoutingModule } from './biblia-routing.module';

import { BibliaPage } from './biblia.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BibliaPageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [BibliaPage]
})
export class BibliaPageModule {}
