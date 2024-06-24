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


  cerrarSesion() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    window.location.href = '/login';
  }

  cargarPedido(pedido: any) {
    console.log(pedido);
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
      console.log(respuesta);

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