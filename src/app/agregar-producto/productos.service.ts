import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  apiUrl = 'https://api-tt2-ktkr.onrender.com/v1/producto/' // url del modulo de productos

  constructor(private http: HttpClient) {
  }

  // Método para obtener los productos
  getProductos() {
    return this.http.get(this.apiUrl);
  }

  // Método para agregar un producto
  agregarProducto(value: any) {
    return this.http.post(this.apiUrl, value);
  }

  // Método para actualizar un producto
  actualizarProducto(id: string, value: any) {
    return this.http.put(this.apiUrl + id, value);
  }

  // Método para eliminar un producto
  eliminarProducto(id: string) {
    return this.http.delete(this.apiUrl + id);
  }

  // Método para obtener un producto por su id
  getProducto(id: string) {
    return this.http.get(this.apiUrl + id);
  }
}
