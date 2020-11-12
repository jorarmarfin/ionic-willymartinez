import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Cursos, CursosVirtuales } from 'src/app/interfaces/interfaces';
import { OctoberService } from 'src/app/services/october.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage implements OnInit {

  cursos:Cursos[]=[];
  loading: HTMLIonLoadingElement;

  constructor(private october:OctoberService, private storage:Storage,private router:Router,public loadingCrl: LoadingController) { }

  ngOnInit() {
    this.presentLoading();
    this.mostrarCursos();
  }
  mostrarCursos(){
    this.october.getCursosVirtuales().subscribe(resp=>{
      this.cursos = resp.cursos;
    },err=>{},()=>{
      this.loading.dismiss();
    })
  }
  async verTema(i:string){
    await this.storage.set('curso',this.cursos[i]).then(()=>{
      this.router.navigateByUrl('curso');
    });    
  }
  async presentLoading() {
    this.loading = await this.loadingCrl.create({
      message: 'Cargando...',
    });
    await this.loading.present();
  }


}
