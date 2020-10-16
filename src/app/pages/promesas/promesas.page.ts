import { Component, OnInit } from '@angular/core';
import { Youtube } from 'src/app/interfaces/interfaces';
import { OctoberService } from 'src/app/services/october.service';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.page.html',
  styleUrls: ['./promesas.page.scss'],
})
export class PromesasPage implements OnInit {

  dataYoutube: Youtube[]=[];
  
  constructor(private october: OctoberService) { }

  ngOnInit() {
    this.october.getYoutube('promesas').subscribe(resp=>{
        this.dataYoutube.push(...resp.youtube);
    });
  }

}
