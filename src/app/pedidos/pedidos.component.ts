import { Component, OnInit } from '@angular/core';
import { CommonModule, NgClass, NgForOf } from "@angular/common";
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProductosService } from '../agregar-producto/productos.service';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [
    NgForOf,
    NgxPaginationModule,
    NgClass,
    FormsModule,
    CommonModule,
    ReactiveFormsModule


  ],
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  estadoProductoSeleccionado: string = "";
  idProductoSeleccionado: number = 0;

  cerrarSesion() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    window.location.href = '/login';
  }

  cargarPedido(pedido: any) {
    this.estadoProductoSeleccionado = pedido.pedido.estado;
    this.idProductoSeleccionado = pedido.pedido.id;
  }

  cambiarEstado() {
    this.productosService.actualizarPedido(this.idProductoSeleccionado, this.estadoProductoSeleccionado).subscribe((respuesta: any) => {
      this.respuesta = respuesta;
      if (this.respuesta.estado === 1) {
        this.mensajeExito = "Estado actualizado con éxito";

        // actualizar el estado en la lista de pedidos en el pedido seleccionado
        this.pedidos = this.pedidos.map((p: any) => {
          if (p.pedido.id === this.idProductoSeleccionado) {
            p.pedido.estado = this.estadoProductoSeleccionado;
          }
          return p;
        });

      } else {
        this.mensajeError = "Error al actualizar el estado";
      }
    });
  }

  constructor(private productosService: ProductosService) { }

  mensajeExito: string = "";
  mensajeError: string = "";
  respuesta: any;

  // variables para la paginacion
  protected readonly Math = Math;
  page: number = 1;
  itemsPerPage: number = 5;
  totalItems: number = 0;

  pedidos: any = [];
  pedidoCompleto: any = {};
  cosas: any = {};

  ngOnInit(): void {
    this.productosService.getPedidos().subscribe((respuesta: any) => {
      this.pedidos = respuesta.pedidos.filter((p: any) => p.usuario !== null);

      this.pedidos = this.pedidos.map((p: any) => {
        if (p.usuario.Usuario.imagen_perfil === null) {
          p.usuario.Usuario.imagen_perfil = "../../assets/img/foto_default.png";
        }
        return p;
      });

      // Actualizar el total de ítems para la paginación
      this.totalItems = this.pedidos.length;

    });
  }
}