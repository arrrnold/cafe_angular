import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  apiUrl = 'https://api-tt2-ktkr.onrender.com/v1/producto/'; // URL del módulo de productos en la nube
  // apiUrl = 'http://localhost:3000/v1/producto/'; // URL del módulo de producto local
  constructor(private http: HttpClient) { }

  // Método para obtener los pedidos completos
  getPedidos(): Observable<any> {
    return this.http.get(this.apiUrl + 'pedidos_completos');
  }
}
