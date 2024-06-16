import { Component, OnInit } from '@angular/core';
import { CommonModule, NgClass, NgForOf } from "@angular/common";
import { NgxPaginationModule } from 'ngx-pagination';
import { ProductosService } from "./productos.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-agregar-producto',
  standalone: true,
  imports: [
    NgForOf,
    NgxPaginationModule,
    NgClass,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {
  formulario: any;

  constructor(private productosService: ProductosService) { }
  // variables para la paginacion
  protected readonly Math = Math;
  productos: any = [];
  page: number = 1;
  itemsPerPage: number = 5;

  // variables para el formulario
  mensajeExito: string = "";
  mensajeError: string = "";
  respuesta: any;

  // variables para el producto seleccionado
  productoSeleccionado: any = {};
  nombreIntroducido = "";
  precioIntroducido = 0;
  cantidadIntroducida = 0;
  recomendacionIntroducida = '';
  imagenIntroducida: any = "../../assets/img/foto_default.png";
  categoriaIntroducida = "";
  visibleIntroducido = false;

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

  cargarProducto(producto: any) {
    console.log(producto);
    this.nombreIntroducido = producto.nombre;
    this.precioIntroducido = producto.precio;
    this.cantidadIntroducida = producto.cantidad;
    this.recomendacionIntroducida = producto.recomendacion;
    this.imagenIntroducida = producto.imagen;
    this.categoriaIntroducida = producto.categoria;
    this.visibleIntroducido = producto.visible;
  }

  eliminarProducto(producto: any) { }


  seleccionarImagen() {
    // Seleccionar imagen del producto desde la computadora
    // Mostrarla en el formulario
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.click();
    input.onchange = (event: any) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => {
        if (e && e.target) {
          this.imagenIntroducida = e.target.result;
        }
      };
      reader.readAsDataURL(file);
    };
  }

  guardarProducto() {
    // Guardar el producto en la base de datos
    // Actualizar la lista de productos
    this.productosService.agregarProducto({
      nombre: this.nombreIntroducido,
      precio: this.precioIntroducido,
      cantidad: this.cantidadIntroducida,
      recomendacion: this.recomendacionIntroducida,
      imagen: this.imagenIntroducida,
      categoria: this.categoriaIntroducida,
      visible: true
    }).subscribe((data: any) => {
      this.respuesta = data;
      console.log(this.respuesta);
      if (this.respuesta.estado === 1) {
        this.mensajeExito = this.respuesta.mensaje;

        // Actualizar la lista de productos
        this.productosService.getProductos().subscribe((data: any) => {
          this.respuesta = data;
          this.productos = this.respuesta.productos;

          this.productos.forEach((producto: any) => {
            producto.visible = false;
            producto.recomendacion = producto.recomendacion ? "Sí" : "No";
          });
        });

        // Borrar el mensaje despues de 5 segundos
        setTimeout(() => {
          this.mensajeExito = "";
        }, 5000);

        
      } else {
        this.mensajeError = this.respuesta.mensaje;
      }
    });

  }


  cambiarImagen($event: Event) {
    throw new Error('Method not implemented.');
  }
  onFileSelected($event: Event) {
    throw new Error('Method not implemented.');
  }

}
