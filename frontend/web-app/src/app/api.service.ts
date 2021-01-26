import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  

  API_URL  =  'http://localhost:8000/api';
  constructor(private  httpClient:  HttpClient) { }


  getBranches():Observable<any[]>{    
    console.log();
    return  this.httpClient.get<any[]>(`${this.API_URL}/branches/?limit=20`);
  }
}
