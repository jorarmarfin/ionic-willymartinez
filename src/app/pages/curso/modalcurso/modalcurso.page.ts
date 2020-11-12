import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modalcurso',
  templateUrl: './modalcurso.page.html',
  styleUrls: ['./modalcurso.page.scss'],
})
export class ModalcursoPage implements OnInit {

  @Input() titulo:string;
  @Input() iframe:string;
  @Input() tipo:string;
  @Input() id:string;
  @Input() imagen:string;

  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {
  }
  cerrar(){
    this.modalCtrl.dismiss();
  }

}
