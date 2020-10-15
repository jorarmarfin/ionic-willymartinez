import { Component, OnInit } from '@angular/core';
import { OctoberService } from 'src/app/services/october.service';

@Component({
  selector: 'app-asambleas',
  templateUrl: './asambleas.page.html',
  styleUrls: ['./asambleas.page.scss'],
})
export class AsambleasPage implements OnInit {

  constructor(private october:OctoberService) { }

  ngOnInit() {
    this.october.getYoutube().subscribe(resp=>{
        console.log(resp);
    });
  }



}
