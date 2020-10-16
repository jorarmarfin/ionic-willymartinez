import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PromesaPageRoutingModule } from './promesa-routing.module';

import { PromesaPage } from './promesa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PromesaPageRoutingModule
  ],
  declarations: [PromesaPage]
})
export class PromesaPageModule {}
