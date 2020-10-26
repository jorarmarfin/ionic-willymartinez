import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Blog } from 'src/app/interfaces/material';
import { OctoberService } from 'src/app/services/october.service';
import { PostPage } from '../post/post.page';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {

  Blog:Blog[]=[];

  constructor(private octoberservice:OctoberService,
              private modalCtrl: ModalController
              ) { }

  ngOnInit() {
    this.cargarPosts();
  }
  cargarPosts(){
      this.octoberservice.getBlog().subscribe(resp=>{
        this.Blog.push(...resp.posts)
      })
  }
  async verPost(post:Blog){
    const modal = await this.modalCtrl.create({
      component: PostPage,
      componentProps: { m_post: post }
      });
    
      await modal.present();
  }
  


}
