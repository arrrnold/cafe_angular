import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  apiUrl = 'https://api-tt2-ktkr.onrender.com/v1/producto/'; // URL del módulo de productos en la nube
  apiUrlUsuarios = 'https://api-tt2-ktkr.onrender.com/v1/usuario/'; // URL del módulo de usuarios en la nube
  apiUrlPedido = 'https://api-tt2-ktkr.onrender.com/v1/pedido/'; // URL del módulo de usuarios en la nube
  // apiUrl = 'http://localhost:3000/v1/producto/'; // URL del módulo de productos local
  // apiUrlUsuarios = 'http://localhost:3000/v1/usuario/'; // URL del módulo de usuarios local
  // apiUrlPedido = 'http://localhost:3000/v1/pedido/'; // URL del módulo de usuarios

  constructor(private http: HttpClient) { }

  // Método para obtener los productos
  getProductos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Método para agregar un producto
  agregarProducto(producto: any): Observable<any> {
    const formData = new FormData();
    formData.append('nombre', producto.nombre);
    formData.append('precio', producto.precio);
    formData.append('cantidad', producto.cantidad);
    formData.append('recomendacion', producto.recomendacion);
    formData.append('categoria', producto.categoria);
    formData.append('visible', producto.visible);
    formData.append('imagen', producto.imagen);

    return this.http.post(this.apiUrl, formData);
  }

  // Método para actualizar un producto
  actualizarProducto(producto: any): Observable<any> {
    const formData = new FormData();

    formData.append('nombre', producto.nombre);
    formData.append('precio', producto.precio);
    formData.append('cantidad', producto.cantidad);
    formData.append('recomendacion', producto.recomendacion);
    formData.append('categoria', producto.categoria);
    formData.append('visible', producto.visible);
    formData.append('imagen', producto.imagen);

    return this.http.put(this.apiUrl + producto.id, formData);
  }

  // Método para eliminar un producto
  eliminarProducto(id: string): Observable<any> {
    return this.http.delete(this.apiUrl + id);
  }

  // Método para obtener un producto por su id
  getProducto(id: string): Observable<any> {
    return this.http.get(this.apiUrl + id);
  }

  // Metodo para cambiar visibilidad del producto (visible o no visible)
  cambiarVisibilidadProducto(id: number, visible: boolean): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(this.apiUrl + 'visible/' + id, { visible }, { headers });
  }

  // Método para obtener los pedidos completos
  getPedidos(): Observable<any> {
    return this.http.get(this.apiUrl + 'pedidos_completos');
  }

  // Método para obtener todos los usuarios
  getUsuarios(): Observable<any> {
    return this.http.get(this.apiUrlUsuarios);
  }

  // Método para actualizar estado de un pedido
  actualizarPedido(id: number, estado: string): Observable<any> {
    // PUT http://localhost:3000/v1/pedido/1/actualizarEstado
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(this.apiUrlPedido + id + '/actualizarEstado', { estado }, { headers });
  }
}


