import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rosario',
  templateUrl: './rosario.page.html',
  styleUrls: ['./rosario.page.scss'],
})
export class RosarioPage implements OnInit {

  categoria: string;
 
  constructor() {}

  ngOnInit() {
    this.categoria = 'rosario';
  }

}
