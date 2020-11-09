import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer,SafeResourceUrl } from "@angular/platform-browser";
@Pipe({
  name: 'doomseguro'
})
export class DoomseguroPipe implements PipeTransform {

  constructor(private domSanitazer: DomSanitizer ) {
    
  }

  transform(enlace: string,tipo:string='video'): SafeResourceUrl {
    if (tipo=='video') {
      if (enlace.length > 11) {
        return this.domSanitazer.bypassSecurityTrustResourceUrl(enlace);
      } else {
        let link = `https://www.youtube.com/embed/${enlace}`;
        return this.domSanitazer.bypassSecurityTrustResourceUrl(link);        
      }
    } else {
      let link = `https://app.hearthis.at/embed/${enlace}/transparent_black/?hcolor=&color=&style=2&block_size=2&block_space=1&background=1&waveform=0&cover=0&autoplay=0&css=`;
      return this.domSanitazer.bypassSecurityTrustResourceUrl(link);  
    }
  }

}
