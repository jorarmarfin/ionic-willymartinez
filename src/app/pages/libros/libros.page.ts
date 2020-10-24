import { Component, OnInit } from '@angular/core';
import { Material } from 'src/app/interfaces/material';
import { OctoberService } from 'src/app/services/october.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.page.html',
  styleUrls: ['./libros.page.scss'],
})
export class LibrosPage implements OnInit {

  dataMaterial: Material[]=[];

  constructor(private octoberservice:OctoberService) { }

  ngOnInit() {
    this.octoberservice.getMateriales().subscribe(resp=>{
      this.dataMaterial.push(...resp.material);
    });

  }

}
