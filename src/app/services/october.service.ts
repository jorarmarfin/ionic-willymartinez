import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RespuestaOctober } from '../interfaces/interfaces';
import { RptaOctoberProx } from '../interfaces/proximamante';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})

export class OctoberService {

  pagina : number = 0;

  constructor(private http:HttpClient) { }

  getYoutube(inicio:string,categoria: string){

    if (inicio==='si') {
      this.pagina = 1;
    } else {
      this.pagina++;
    }
    return this.http.get<RespuestaOctober>(`${URL}/youtube/${categoria}?page=${this.pagina}`);
  }
  getProximamente(){
    return this.http.get<RptaOctoberProx>(`${URL}/proximamente`);
  }
}
