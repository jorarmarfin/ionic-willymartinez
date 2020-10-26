import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirmesPageRoutingModule } from './firmes-routing.module';

import { FirmesPage } from './firmes.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirmesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FirmesPage]
})
export class FirmesPageModule {}
