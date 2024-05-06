import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  apiUrl = 'https://api-tt2-ktkr.onrender.com/v1/registro/' // url del modulo de auth

  login(value: any) {
    return this.http.post(this.apiUrl + 'login', value)
  }

  register(value: any) {
    return this.http.post(this.apiUrl + 'register', value)
  }

  enviarEmail(value: any) {
    return this.http.post(this.apiUrl + 'enviarEmail', value)
  }

  cambiarClave(value: any) {
    return this.http.post(this.apiUrl + 'cambiarClave', value)
  }

}
