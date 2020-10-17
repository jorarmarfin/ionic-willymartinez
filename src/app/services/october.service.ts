import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RespuestaOctober } from '../interfaces/interfaces';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})

export class OctoberService {


  constructor(private http:HttpClient) { }

  getYoutube(categoria: string){
    return this.http.get<RespuestaOctober>(`${URL}/youtube/${categoria}`);
  }
}
