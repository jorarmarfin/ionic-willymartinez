import { NgModule } from '@angular/core';
import { DoomseguroPipe } from './doomseguro.pipe';



@NgModule({
  declarations: [DoomseguroPipe],
  exports:[
    DoomseguroPipe
  ]
})
export class PipesModule { }
