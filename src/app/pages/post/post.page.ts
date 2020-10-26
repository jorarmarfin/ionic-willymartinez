import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Blog } from 'src/app/interfaces/material';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {
  @Input() m_post:Blog;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log(this.m_post);
  }
  cerrar(){
    this.modalCtrl.dismiss();
  }

}
