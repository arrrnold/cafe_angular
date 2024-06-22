import { Component, OnInit } from "@angular/core";
import { CommonModule, NgClass, NgForOf } from "@angular/common";
import { NgxPaginationModule } from "ngx-pagination";
import { ProductosService } from "./productos.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { buffer } from "rxjs";

@Component({
  selector: "app-agregar-producto",
  standalone: true,
  imports: [
    NgForOf,
    NgxPaginationModule,
    NgClass,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: "./agregar-producto.component.html",
  styleUrls: ["./agregar-producto.component.css"]
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
  idProducto = "";
  nombreIntroducido = "";
  precioIntroducido = 0;
  cantidadIntroducida = 0;
  recomendacionIntroducida = "";
  imagenIntroducida: any = "../../assets/img/foto_default.png";
  categoriaIntroducida = "";
  visibleIntroducido = false;
  imagenArchivo: File | null = null;


  ngOnInit() {

    this.productosService.getProductos().subscribe((data: any) => {
      // si los productos de la respuesta tienen visible en true, los agregamos al array de productos
      this.productos = data.productos.filter((p: any) => p.visible);
    });
  }

  cargarProducto(producto: any) {

    console.log(producto);
    this.idProducto = producto.id;
    this.nombreIntroducido = producto.nombre;
    this.precioIntroducido = producto.precio;
    this.cantidadIntroducida = producto.cantidad;
    this.recomendacionIntroducida = producto.recomendacion;
    this.imagenIntroducida = producto.imagen;
    this.categoriaIntroducida = producto.categoria;
    this.visibleIntroducido = true;
  }


  cambiarVisibilidad() {
    this.productosService.cambiarVisibilidadProducto(this.idProducto, this.visibleIntroducido).subscribe(
      (data: any) => {
        this.mensajeExito = "Producto eliminado con éxito";
      },
      (error: any) => {
        this.mensajeError = "Error al eliminar el producto";
      }
    );

    // slice para eliminar el producto del array de productos
    this.productos = this.productos.filter((p: any) => p.id !== this.idProducto);

    // los mensajes duran solo 2 segundos
    setTimeout(() => {
      this.mensajeExito = "";
      this.mensajeError = "";
    }, 2000);

    this.limpiarFormulario();

    /*
      que ocurra lo mismo que si yo hiciera clic en 
      <button aria-label="Close" class="btn-close bg-white" data-bs-dismiss="modal" type="button"></button>
    */
  }

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
      recomendacion: this.recomendacionIntroducida, // recomendacion es un string, no un booleano
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

    // los mensajes duran solo 2 segundos
    setTimeout(() => {
      this.mensajeExito = "";
      this.mensajeError = "";
    }, 2000);
  }

  // actualizar producto
  actualizarProducto() {
    const productoActualizado = {
      id: this.idProducto,
      nombre: this.nombreIntroducido,
      precio: this.precioIntroducido,
      cantidad: this.cantidadIntroducida,
      categoria: this.categoriaIntroducida,
      visible: true,
      recomendacion: this.recomendacionIntroducida,
      imagen: this.imagenArchivo
    };

    this.productosService.actualizarProducto(productoActualizado).subscribe(
      (data: any) => {
        this.mensajeExito = data.mensaje;
      },
      (error: any) => {
        this.mensajeError = error.error.mensaje;
      }
    );

    // Actualizar el producto en el array local si es necesario
    const index = this.productos.findIndex((p: any) => p.id === this.idProducto);
    if (index !== -1) {
      this.productos[index] = { ...productoActualizado, imagen: this.imagenIntroducida }; // 
    } else {
      console.log("No se encontró el producto en el array");
    }

    // los mensajes duran solo 2 segundos
    setTimeout(() => {
      this.mensajeExito = "";
      this.mensajeError = "";
    }, 2000);

  }

  limpiarFormulario() {
    this.nombreIntroducido = "";
    this.precioIntroducido = 0;
    this.cantidadIntroducida = 0;
    this.recomendacionIntroducida = "";
    this.imagenIntroducida = "../../assets/img/foto_default.png";
    this.categoriaIntroducida = "";
    this.visibleIntroducido = false;
    this.imagenArchivo = null;
    this.mensajeExito = "";
    this.mensajeError = "";

  }

  cambiarImagen($event: Event) {
    throw new Error("Method not implemented.");
  }
  onFileSelected($event: Event) {
    throw new Error("Method not implemented.");
  }
}
