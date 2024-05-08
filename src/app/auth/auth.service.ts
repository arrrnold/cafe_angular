import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'https://api-tt2-ktkr.onrender.com/v1/registro/' // url del modulo de auth

  constructor(private http: HttpClient) { }

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

  // Método para verificar si el usuario está autenticado
  public get loggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }

  // Método para almacenar el token en el almacenamiento local
  public storeToken(token: string): void {
    localStorage.setItem('token', token);
  }
}