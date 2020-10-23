import { Component, OnInit } from '@angular/core';
import { Proximamente } from 'src/app/interfaces/proximamante';
import { OctoberService } from 'src/app/services/october.service';

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

  constructor(private octoberService:OctoberService) { }

  ngOnInit() {
    let pagina=0;
    this.octoberService.getProximamente().subscribe(resp=>{
      this.proximamente.push(...resp.proximamente);
    });
  }
  onClick(){}

}
