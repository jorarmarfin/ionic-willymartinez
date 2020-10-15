import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BiografiaPageRoutingModule } from './biografia-routing.module';

import { BiografiaPage } from './biografia.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BiografiaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [BiografiaPage]
})
export class BiografiaPageModule {}
