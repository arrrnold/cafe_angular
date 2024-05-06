import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  
  apiUrl = 'https://api-tt2-ktkr.onrender.com/v1/usuario/' // url del modulo de auth
  
  // login(data: any) {
  //   return this.http.post(this.apiUrl + 'login', data);
  // }

  // getUsuarios
  getUsuarios() {
    return this.http.get(this.apiUrl);
  }

}
