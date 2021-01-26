import { Global } from './global';
import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL  =  'http://localhost:8000/api';
  private data$! : Observable<any>;
  
  constructor(private  httpClient:  HttpClient, private global: Global) {
   }

  getBranches():Observable<any[]>{    
    this.global.globalVariable == undefined ? this.data$ =  this.httpClient.get<any[]>(`${this.API_URL}/branches/`).pipe(shareReplay(1)) : this.data$ = this.httpClient.get<any[]>(`${this.API_URL}/branches/autocomplete/${this.global.globalVariable}`).pipe(shareReplay(1));
    return this.data$;
  }
}
