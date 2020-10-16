import { Component, Input, OnInit } from '@angular/core';
import { Youtube } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
})
export class VideosComponent implements OnInit {

  @Input()dataComponet: Youtube[]=[];
  constructor() { }

  ngOnInit() {}
  
  loadData(){}

}
