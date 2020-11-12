import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Proximamente } from 'src/app/interfaces/proximamante';
import { OctoberService } from 'src/app/services/october.service';

@Component({
  selector: 'app-prox',
  templateUrl: './prox.page.html',
  styleUrls: ['./prox.page.scss'],
})
export class ProxPage implements OnInit {

  proximamente:Proximamente[]=[];

  constructor(private octoberService:OctoberService,private iab:InAppBrowser) { }

  ngOnInit() {
    let pagina=0;
    this.octoberService.getProximamente().subscribe(resp=>{
      this.proximamente.push(...resp.proximamente);
    });
  }
  inscripcion(i:string){
    const browser = this.iab.create(this.proximamente[i].enlace,'_system');
  }

}
