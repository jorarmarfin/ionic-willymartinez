import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { NavController } from '@ionic/angular';
import { Material } from 'src/app/interfaces/material';
import { OctoberService } from 'src/app/services/october.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.page.html',
  styleUrls: ['./libros.page.scss'],
})
export class LibrosPage implements OnInit {

  dataMaterial: Material[]=[];

  constructor(private octoberservice:OctoberService,
    private iab:InAppBrowser,
    private navctrl:NavController) { }

  ngOnInit() {
    this.octoberservice.getMateriales().subscribe(resp=>{
      this.dataMaterial.push(...resp.material);
    });

  }
  comprar(i:string){
    // const browser = this.iab.create(this.dataMaterial[i].app,'_system');
    this.navctrl.navigateRoot('/apps')
  }

}
