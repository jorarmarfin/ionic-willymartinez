import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.page.html',
  styleUrls: ['./promesas.page.scss'],
})
export class PromesasPage implements OnInit {

  categoria: string;
 
  constructor() {}

  ngOnInit() {
    this.categoria = 'promesas';
  }

}
