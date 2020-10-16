import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer,SafeResourceUrl } from "@angular/platform-browser";
@Pipe({
  name: 'doomseguro'
})
export class DoomseguroPipe implements PipeTransform {

  constructor(private domSanitazer: DomSanitizer ) {
    
  }

  transform(value: string): SafeResourceUrl {
    return this.domSanitazer.bypassSecurityTrustResourceUrl(value);
  }

}
