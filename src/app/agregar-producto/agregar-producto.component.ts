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

  constructor(private productosService: ProductosService) {}

  mensajeExito: string = "";
  mensajeError: string = "";
  respuesta: any;
  productos: any = [];
  page: number = 1;
  protected readonly Math = Math;

  ngOnInit() {
    this.productosService.getProductos().subscribe((data: any) => {
      this.respuesta = data;
      this.productos = this.respuesta.productos;

      this.productos.forEach((producto: any) => {
        producto.visible = false;
        producto.recomendacion = producto.recomendacion ? "Sí" : "No";
      });
    });
  }

  onAgregarProducto(producto: any) {
    producto.visible = true;
    console.log(producto);

    this.productosService.agregarProducto(producto).subscribe({
      next: (res: any) => {
        console.log(res);
        if (res.estado === 1) {
          this.mensajeExito = "Producto agregado correctamente";
          this.productos.push(producto);
        } else {
          this.mensajeError = "Error al agregar producto";
        }
      },
      error: (error: any) => {
        console.log(error);
        this.mensajeError = "Error al agregar producto";
      }
    });
  }

  onEditarProducto(producto: any) {
    console.log(producto);
  }
}
