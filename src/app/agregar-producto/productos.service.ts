import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  apiUrl = 'https://api-tt2-ktkr.onrender.com/v1/producto/'; // URL del módulo de productos en la nube
  // apiUrl = 'http://localhost:3000/v1/producto/'; // URL del módulo de productos local

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
    console.log(producto);

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
}
