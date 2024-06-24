import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  apiUrl = 'https://api-tt2-ktkr.onrender.com/v1/usuario/'; // URL del módulo de usuario en la nube
  // apiUrl = 'http://localhost:3000/v1/usuario/'; // URL del módulo de usuario local

  constructor(private http: HttpClient) { }

  // Método para obtener todos los usuarios
  obtenerUsuarios() {
    return this.http.get(this.apiUrl);
  }

  actualizarRol(usuario: any) {
    return this.http.put(this.apiUrl + "actualizarRol", usuario);
  }

}
