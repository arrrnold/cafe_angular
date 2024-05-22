import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";
import {NgxPaginationModule} from 'ngx-pagination';

@Component({
  selector: 'app-agregar-producto',
  standalone: true,
  imports: [
    NgForOf,
    NgxPaginationModule
  ],
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent {
  productos = [
    {
      nombre: 'Producto 1',
      precio: 100,
      cantidad: 10,
      categoria: 'Categoria 1',
      recomendacion: 'Si',
      imagen: 'https://via.placeholder.com/150'
    },
    {
      nombre: 'Producto 2',
      precio: 200,
      cantidad: 20,
      categoria: 'Categoria 2',
      recomendacion: 'Si',
      imagen: 'https://via.placeholder.com/150'
    },
    {
      nombre: 'Producto 3',
      precio: 300,
      cantidad: 30,
      categoria: 'Categoria 3',
      recomendacion: 'Si',
      imagen: 'https://via.placeholder.com/150'
    },
    {
      nombre: 'Producto 4',
      precio: 400,
      cantidad: 40,
      categoria: 'Categoria 4',
      recomendacion: 'Si',
      imagen: 'https://via.placeholder.com/150'
    },
    {
      nombre: 'Producto 5',
      precio: 500,
      cantidad: 50,
      categoria: 'Categoria 5',
      recomendacion: 'Si',
      imagen: 'https://via.placeholder.com/150'
    },
    {
      nombre: 'Producto 6',
      precio: 600,
      cantidad: 60,
      categoria: 'Categoria 6',
      recomendacion: 'Si',
      imagen: 'https://via.placeholder.com/150'
    },
    {
      nombre: 'Producto 7',
      precio: 700,
      cantidad: 70,
      categoria: 'Categoria 7',
      recomendacion: 'Si',
      imagen: 'https://via.placeholder.com/150'
    },
    {
      nombre: 'Producto 8',
      precio: 800,
      cantidad: 80,
      categoria: 'Categoria 8',
      recomendacion: 'Si',
      imagen: 'https://via.placeholder.com/150'
    },
    {
      nombre: 'Producto 9',
      precio: 900,
      cantidad: 90,
      categoria: 'Categoria 9',
      recomendacion: 'No',
      imagen: 'https://via.placeholder.com/150'
    },
    {
      nombre: 'Producto 10',
      precio: 1000,
      cantidad: 100,
      categoria: 'Categoria 10',
      recomendacion: 'No',
      imagen: 'https://via.placeholder.com/150'
    },
    // otros 10 con nombres reales
    {
      nombre: 'Producto 11',
      precio: 1100,
      cantidad: 110,
      categoria: 'Categoria 11',
      recomendacion: 'No',
      imagen: 'https://via.placeholder.com/150'
    },
    {
      nombre: 'Producto 12',
      precio: 1200,
      cantidad: 120,
      categoria: 'Categoria 12',
      recomendacion: 'No',
      imagen: 'https://via.placeholder.com/150'
    },
    {
      nombre: 'Producto 13',
      precio: 1300,
      cantidad: 130,
      categoria: 'Categoria 13',
      recomendacion: 'No',
      imagen: 'https://via.placeholder.com/150'
    },
    {
      nombre: 'Producto 14',
      precio: 1400,
      cantidad: 140,
      categoria: 'Categoria 14',
      recomendacion: 'No',
      imagen: 'https://via.placeholder.com/150'
    },
    {
      nombre: 'Producto 15',
      precio: 1500,
      cantidad: 150,
      categoria: 'Categoria 15',
      recomendacion: 'No',
      imagen: 'https://via.placeholder.com/150'
    },
    {
      nombre: 'Producto 16',
      precio: 1600,
      cantidad: 160,
      categoria: 'Categoria 16',
      recomendacion: 'No',
      imagen: 'https://via.placeholder.com/150'
    },
    {
      nombre: 'Producto 17',
      precio: 1700,
      cantidad: 170,
      categoria: 'Categoria 17',
      recomendacion: 'No',
      imagen: 'https://via.placeholder.com/150'
    },
    {
      nombre: 'Producto 18',
      precio: 1800,
      cantidad: 180,
      categoria: 'Categoria 18',
      recomendacion: 'No',
      imagen: 'https://via.placeholder.com/150'
    },
    {
      nombre: 'Producto 19',
      precio: 1900,
      cantidad: 190,
      categoria: 'Categoria 19',
      recomendacion: 'No',
      imagen: 'https://via.placeholder.com/150'
    },
    {
      nombre: 'Producto 20',
      precio: 2000,
      cantidad: 200,
      categoria: 'Categoria 20',
      recomendacion: 'No',
      imagen: 'https://via.placeholder.com/150'
    }
  ];

  page: number = 1;
  protected readonly Math = Math;
}
