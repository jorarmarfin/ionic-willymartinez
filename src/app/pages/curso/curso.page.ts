import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Temas } from 'src/app/interfaces/interfaces';
import { ModalcursoPage } from './modalcurso/modalcurso.page';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.page.html',
  styleUrls: ['./curso.page.scss'],
})
export class CursoPage implements OnInit {

  temas:Temas;
  imagen:string;
  constructor(private storage:Storage,private modalCtrl:ModalController) { 
    this.cargarCurso();
  }

  ngOnInit() {
    
  }
  async presentModal(i:string) {
    const modal = await this.modalCtrl.create({
      component: ModalcursoPage,
      componentProps: {
        'titulo': this.temas[i].titulo_audio,
        'tipo': this.temas[i].tipo,
        'iframe': this.temas[i].codigo_audio,
        'id': this.temas[i].id,
        'imagen': this.imagen
      }
    });
    return await modal.present();
  }
  async cargarCurso(){
    await this.storage.get('curso').then(resp=>{
      this.temas = resp.temas;
      this.imagen = resp.imagen;
    });
  }



}
