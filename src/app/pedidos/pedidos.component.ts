import { Component, OnInit } from '@angular/core';
import { CommonModule, NgClass, NgForOf } from "@angular/common";
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [
    NgForOf,
    NgxPaginationModule,
    NgClass,
    FormsModule,
    CommonModule
  ],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css'
})
export class PedidosComponent {

  mensajeExito: string = "";
  mensajeError: string = "";
  respuesta: any;
  // pedidos: any = [];
  page: number = 1;
  protected readonly Math = Math;

  // arreglo local de pedidos (para pruebas)

  /*
  estis son los campos de la tabla pedidos
  <td class="align-middle">{{ pedido.fecha }}</td>
  <td class="align-middle">{{ pedido.cant_a_pagar }}</td>
  <td class="align-middle">{{ pedido.propina }}</td>
  <td class="align-middle">{{ pedido.total }}</td>
  <td class="align-middle">{{ pedido.pagado }}</td>
  <td class="align-middle">{{ pedido.preferencias }}</td>
  <td class="align-middle">{{ pedido.ubicacion }}</td>
  <td class="align-middle">{{ pedido.folio }}</td>
  <td class="align-middle">{{ pedido.estado }}</td>
  */

  pedidos = [
    {fecha: '2021-10-01', cant_a_pagar: 100, propina: 10, total: 110, pagado: 'Sí', preferencias: 'Sin cebolla', ubicacion: 'Mesa 1', folio: 1, estado: 'Entregado'},
  ];

onAgregarPedido(pedido: any) { }

onEditarPedido(pedido: any) { }

}
