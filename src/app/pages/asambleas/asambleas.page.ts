import { Component, OnInit } from '@angular/core';
import { OctoberService } from 'src/app/services/october.service';

@Component({
  selector: 'app-asambleas',
  templateUrl: './asambleas.page.html',
  styleUrls: ['./asambleas.page.scss'],
})
export class AsambleasPage implements OnInit {

  v_asambleas: any[]=[];
  constructor(private october:OctoberService) { }

  ngOnInit() {
    // this.october.getYoutube().subscribe((resp:any)=>{
    //     this.v_asambleas = resp.params;
    // });
  }



}
