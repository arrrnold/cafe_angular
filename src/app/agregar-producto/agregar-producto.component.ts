import {Component, OnInit} from '@angular/core';
import {CommonModule, NgClass, NgForOf} from "@angular/common";
import {NgxPaginationModule} from 'ngx-pagination';
import {ProductosService} from "./productos.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-agregar-producto',
  standalone: true,
  imports: [
    NgForOf,
    NgxPaginationModule,
    NgClass,
    FormsModule,
    CommonModule
  ],
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {

  constructor(private productosService: ProductosService) {
  }

  respuesta: any;
  productos: any;
  nombre = '';
  precio = '';
  


  ngOnInit() {
    this.productosService.getProductos().subscribe((data: any) => {
      this.respuesta = data;
      this.productos = this.respuesta.productos;

      if (this.productos.recomendacion == true) {
        this.productos.recomendacion = "Si";
      } else {
        this.productos.recomendacion = "No";
      }
    });
  }

  page: number = 1;
  protected readonly Math = Math;

  onAgregarProducto(value: any) {
    // console.log(value);
    
  }

  onEditarProducto(value: any) {
    console.log(value);
  }
}
