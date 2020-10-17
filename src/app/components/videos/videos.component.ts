import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Youtube } from 'src/app/interfaces/interfaces';
import { VideodetalleComponent } from '../videodetalle/videodetalle.component';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
})
export class VideosComponent implements OnInit {

  @Input()dataComponet: Youtube[]=[];

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}
  
  loadData(){}

  async verDetalle(enlace:string) {
    const modal = await this.modalCtrl.create({
    component: VideodetalleComponent,
    componentProps: { m_enlace: enlace }
    });
  
    await modal.present();
  
  }

}
