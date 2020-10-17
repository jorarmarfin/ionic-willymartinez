import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RespuestaOctober } from '../interfaces/interfaces';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})

export class OctoberService {

  pagina : number = 0;

  constructor(private http:HttpClient) { }

  getYoutube(categoria: string){
    this.pagina++;
    return this.http.get<RespuestaOctober>(`${URL}/youtube/${categoria}?page=${this.pagina}`);
  }
}
