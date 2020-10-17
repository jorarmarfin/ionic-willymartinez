import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-videodetalle',
  templateUrl: './videodetalle.component.html',
  styleUrls: ['./videodetalle.component.scss'],
})
export class VideodetalleComponent implements OnInit {

  @Input()m_enlace:string;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  cerrar(){
    this.modalCtrl.dismiss();
  }

}
