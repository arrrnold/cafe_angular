import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-agregar-producto',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './agregar-producto.component.html',
  styleUrl: './agregar-producto.component.css'
})
export class AgregarProductoComponent {

  // 10 productos con estas variables
  // //{ producto.nombre }}</td>
  //               <td>{{ producto.precio }}</td>
  //               <td>{{ producto.cantidad }}</td>
  //               <td>{{ producto.categoria }}</td>
  //               <td>{{ producto.recomendacion }}</td>
  //               <td><img src="{{producto.imagen}}"

  productos = [
    {
      nombre: 'Producto 1',
      precio: 100,
      cantidad: 10,
      categoria: 'Categoria 1',
      recomendacion: 'Recomendacion 1',
      imagen: 'https://via.placeholder.com/150'
    },
    {
      nombre: 'Producto 2',
      precio: 200,
      cantidad: 20,
      categoria: 'Categoria 2',
      recomendacion: 'Recomendacion 2',
      imagen: 'https://via.placeholder.com/150'
    },
    {
      nombre: 'Producto 3',
      precio: 300,
      cantidad: 30,
      categoria: 'Categoria 3',
      recomendacion: 'Recomendacion 3',
      imagen: 'https://via.placeholder.com/150'
    },
    {
      nombre: 'Producto 4',
      precio: 400,
      cantidad: 40,
      categoria: 'Categoria 4',
      recomendacion: 'Recomendacion 4',
      imagen: 'https://via.placeholder.com/150'
    },
    {
      nombre: 'Producto 5',
      precio: 500,
      cantidad: 50,
      categoria: 'Categoria 5',
      recomendacion: 'Recomendacion 5',
      imagen: 'https://via.placeholder.com/150'
    },
    {
      nombre: 'Producto 6',
      precio: 600,
      cantidad: 60,
      categoria: 'Categoria 6',
      recomendacion: 'Recomendacion 6',
      imagen: 'https://via.placeholder.com/150'
    },
    {
      nombre: 'Producto 7',
      precio: 700,
      cantidad: 70,
      categoria: 'Categoria 7',
      recomendacion: 'Recomendacion 7',
      imagen: 'https://via.placeholder.com/150'
    },
    {
      nombre: 'Producto 8',
      precio: 800,
      cantidad: 80,
      categoria: 'Categoria 8',
      recomendacion: 'Recomendacion 8',
      imagen: 'https://via.placeholder.com/150'
    },
    {
      nombre: 'Producto 9',
      precio: 900,
      cantidad: 90,
      categoria: 'Categoria 9',
      recomendacion: 'Recomendacion 9',
      imagen: 'https://via.placeholder.com/150'
    },
    {
      nombre: 'Producto 10',
      precio: 1000,
      cantidad: 100,
      categoria: 'Categoria 10',
      recomendacion: 'Recomendacion 10',
      imagen: 'https://via.placeholder.com/150'
    }
  ];
}
