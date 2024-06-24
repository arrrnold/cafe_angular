import { Component, OnInit } from '@angular/core';
import { CommonModule, NgClass, NgForOf } from "@angular/common";
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from "@angular/forms";
import { PedidosService } from './pedidos.service';

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
export class PedidosComponent implements OnInit{

  constructor(private pedidosService: PedidosService) { }

  // variables la tabla de pedidos
  mensajeExito: string = "";
  mensajeError: string = "";
  respuesta: any;
  
  // variables para la paginacion
  page: number = 1;
  protected readonly Math = Math;

  // variable para los pedidos
  pedidosCompletos: any = [];
  pedidoCompleto:any = {};
  cosas: any = {};

  ngOnInit(): void {
    this.pedidosService.getPedidos().subscribe((respuesta: any) => {
      console.log(respuesta);
      this.pedidosCompletos = respuesta.pedidos; // Asegúrate de que esto es un arreglo
    });
  }
}
