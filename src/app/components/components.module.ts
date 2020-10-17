import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';


import { HeaderComponent } from './header/header.component';
import { VideosComponent } from './videos/videos.component';
import { PipesModule } from '../pipes/pipes.module';
import { VideodetalleComponent } from './videodetalle/videodetalle.component';

@NgModule({
  declarations: [
    HeaderComponent,
    VideosComponent,
    VideodetalleComponent
  ],
  exports:[
    HeaderComponent,
    VideosComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
