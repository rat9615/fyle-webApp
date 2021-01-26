import { Global } from './global';
import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  

  API_URL  =  'http://localhost:8000/api';
  constructor(private  httpClient:  HttpClient, private global: Global) { }


  getBranches():Observable<any[]>{    
    if(this.global.globalVariable == undefined)
      return  this.httpClient.get<any[]>(`${this.API_URL}/branches/`);
    return  this.httpClient.get<any[]>(`${this.API_URL}/branches/autocomplete/${this.global.globalVariable}`);
  }
}
