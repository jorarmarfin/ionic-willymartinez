import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';


import { HeaderComponent } from './header/header.component';
import { VideosComponent } from './videos/videos.component';

@NgModule({
  declarations: [
    HeaderComponent,
    VideosComponent
  ],
  exports:[
    HeaderComponent,
    VideosComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
