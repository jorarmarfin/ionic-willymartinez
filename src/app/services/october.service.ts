import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OctoberService {

  constructor(private http:HttpClient) { }

  getYoutube(categoria: string){
    return this.http.get<RespuestaOctober>('http://willymartinezsanchez.com/api/v1/youtube/'+categoria);
  }
}
