import { Component, OnInit } from '@angular/core';
import { CommonModule, NgClass, NgForOf } from "@angular/common";
import { NgxPaginationModule } from 'ngx-pagination';
import { ProductosService } from "./productos.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { buffer } from 'rxjs';

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
  imagenArchivo: File | null = null;


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


  seleccionarImagen(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      this.imagenArchivo = event.target.files[0];
      reader.onload = (e: any) => {
        this.imagenIntroducida = e.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  guardarProducto() {
    const nuevoProducto = {
      nombre: this.nombreIntroducido,
      precio: this.precioIntroducido,
      cantidad: this.cantidadIntroducida,
      recomendacion: this.recomendacionIntroducida,
      categoria: this.categoriaIntroducida,
      visible: true,
      imagen: this.imagenArchivo
    };

    this.productosService.agregarProducto(nuevoProducto).subscribe(
      (data: any) => {
        this.mensajeExito = data.mensaje;
      },
      (error: any) => {
        this.mensajeError = error.error.mensaje;
      }
    );

    // actualizar el array de productos con el nuevo producto (la imagen no se guarda en la base de datos, solo el nombre del archivo)
    this.productos.push({
      nombre: this.nombreIntroducido,
      precio: this.precioIntroducido,
      cantidad: this.cantidadIntroducida,
      recomendacion: this.recomendacionIntroducida,
      categoria: this.categoriaIntroducida,
      visible: true,
      imagen: this.imagenIntroducida
    });
    
  }

  limpiarFormulario() {
    this.nombreIntroducido = "";
    this.precioIntroducido = 0;
    this.cantidadIntroducida = 0;
    this.recomendacionIntroducida = '';
    this.imagenIntroducida = "../../assets/img/foto_default.png";
    this.categoriaIntroducida = "";
    this.visibleIntroducido = false;
    this.imagenArchivo = null;
  }

  cambiarImagen($event: Event) {
    throw new Error('Method not implemented.');
  }
  onFileSelected($event: Event) {
    throw new Error('Method not implemented.');
  }

}
