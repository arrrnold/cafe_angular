import { Component, OnInit } from '@angular/core';
import { CommonModule, NgClass, NgForOf } from "@angular/common";
import { NgxPaginationModule } from 'ngx-pagination';
import { ProductosService } from "./productos.service";
import { FormsModule } from "@angular/forms";

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


  ngOnInit() {
    this.productosService.getProductos().subscribe((data: any) => {
      this.respuesta = data;
      this.productos = this.respuesta.productos;

      // si el estado del producto "visible" = true entonces se muestra en la tabla
      this.productos.forEach((producto: any) => {
        producto.visible = false;
      });

      if (this.productos.recomendacion == true) {
        this.productos.recomendacion = "Si";
      } else {
        this.productos.recomendacion = "No";
      }
    });
  }

  page: number = 1;
  protected readonly Math = Math;

  onAgregarProducto(producto: any) {
    producto.visible = true;

    // convertir la imagen del producto para guardarla en la bd y mostrarla en la tabla
    const reader = new FileReader();
    reader.readAsDataURL(producto.imagen);
    reader.onload = () => {
      producto.imagen = reader.result;
    };


    console.log(producto);


  }

  onEditarProducto(producto: any) {
    console.log(producto);
  }
}
