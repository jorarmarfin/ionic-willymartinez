import { Component, OnInit } from '@angular/core';
import { Proximamente } from 'src/app/interfaces/proximamante';
import { OctoberService } from 'src/app/services/october.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  proximamente:Proximamente[]=[];
  slideOpts = {
    slidePerView: 3,
    spaceBetween: 2,
    width:250,
    freeMode: true,
  };

  constructor(private octoberService:OctoberService,private iab:InAppBrowser) { }

  ngOnInit() {
    let pagina=0;
    this.octoberService.getProximamente().subscribe(resp=>{
      this.proximamente.push(...resp.proximamente);
    });
  }
  abrirRedSocial(red:string){
    let ruta = 'http://willymartinezsanchez.com/';
    if (red == 'f') {
      ruta = 'https://www.facebook.com/willy.martinez.sanchez.2016';
    }else if(red='y'){
      ruta = 'https://www.youtube.com/user/WILLYMARTINEZSANCHEZ';
    }else if(red == 't'){
      ruta = 'https://twitter.com/WillyMartinezS1';
    }else if(red == 'i'){
      ruta = 'https://www.instagram.com/willymartinezsanchez/?hl=es-la';
    }
    const browser = this.iab.create(ruta,'_system');
  }

}
