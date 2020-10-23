import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Youtube } from 'src/app/interfaces/interfaces';
import { VideodetalleComponent } from '../videodetalle/videodetalle.component';
import { LoadingController } from '@ionic/angular';
import { OctoberService } from 'src/app/services/october.service';


@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
})
export class VideosComponent implements OnInit {

  @Input()categoriaYoutube: string;
  dataYoutube: Youtube[]=[];
  loading: HTMLIonLoadingElement;

  constructor(private modalCtrl: ModalController,
              private loadingCtrl: LoadingController,
              private october: OctoberService) { 
                
              }

  ngOnInit() {
    this.presentLoading();
    this.cargaData('si');
  }
  
  loadData(event){
    this.cargaData('no',event);
  }
  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Cargando ...',
      duration: 2000
    });
    await this.loading.present();

  }

  async verDetalle(enlace:string) {
    const modal = await this.modalCtrl.create({
    component: VideodetalleComponent,
    componentProps: { m_enlace: enlace }
    });
  
    await modal.present();
  
  }
  cargaData(inicio:string,event?){
    this.october.getYoutube(inicio,'promesas').subscribe(resp=>{
      this.dataYoutube.push(...resp.youtube);
      if (event) {
        event.target.complete();
      }
    },err=>{
    },()=>{
      this.loading.dismiss();
    });
  }

}
