import { Component, OnInit } from '@angular/core';
import { CommonModule, NgClass, NgForOf } from "@angular/common";
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProductosService } from '../agregar-producto/productos.service';
import jsPDF from 'jspdf';
import 'svg2pdf.js';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [
    NgForOf,
    NgxPaginationModule,
    NgClass,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  estadoPedidoSeleccionado: string = "";
  idPedidoSeleccionado: number = 0;

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

  cerrarSesion() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    window.location.href = '/login';
  }

  cargarPedido(pedido: any) {
    this.estadoPedidoSeleccionado = pedido.pedido.estado;
    this.idPedidoSeleccionado = pedido.pedido.id;
    this.pedidoCompleto = pedido;
  }

  imprimirComprobante() {
    const doc = new jsPDF();

    const logoPath = '../../assets/img/logo.svg';
    const loadSVG = (path: string) => {
      return fetch(path)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.text();
        });
    };

    const renderPDF = async () => {
      try {
        // Cargar el logo SVG y añadirlo al documento
        const svg = await loadSVG(logoPath);
        const svgElement = new DOMParser().parseFromString(svg, 'image/svg+xml').documentElement;
        await doc.svg(svgElement, { x: 70, y: 10, width: 70, height: 35 });
      } catch (error) {
        console.error('Error loading SVG:', error);
      }

      let y = 60; // Ajustar para dar espacio al logo

      // Función para texto con estilo
      const textWithStyles = (text: string, isBold: boolean, x: number, y: number) => {
        if (isBold) {
          doc.setFont('Times New Roman', 'bold');
        } else {
          doc.setFont('Times New Roman', 'normal');
        }
        doc.text(text, x, y);
      };

      textWithStyles('Nombre:', true, 10, y);
      textWithStyles(`${this.pedidoCompleto.usuario.Usuario.nombre_completo}`, false, 50, y);
      y += 10;

      textWithStyles('Correo:', true, 10, y);
      textWithStyles(`${this.pedidoCompleto.usuario.Usuario.email}`, false, 50, y);
      y += 10;

      textWithStyles('Productos:', true, 10, y);
      y += 10;
      this.pedidoCompleto.productos.forEach((producto: any) => {
        textWithStyles(`${producto.cantidad} x ${producto.nombre}`, false, 10, y);
        y += 10;
      });

      textWithStyles('Preferencias:', true, 10, y);
      textWithStyles(`${this.pedidoCompleto.pedido.preferencias}`, false, 50, y);
      y += 10;

      textWithStyles('Ubicación:', true, 10, y);
      textWithStyles(`${this.pedidoCompleto.pedido.ubicacion}`, false, 50, y);
      y += 10;

      textWithStyles('Pagado:', true, 10, y);
      textWithStyles(`${this.pedidoCompleto.pedido.pagado ? 'Sí' : 'No'}`, false, 50, y);
      y += 10;

      textWithStyles('Estado:', true, 10, y);
      textWithStyles(`${this.pedidoCompleto.pedido.estado}`, false, 50, y);
      y += 10;

      textWithStyles('Fecha:', true, 10, y);
      textWithStyles(`${new Date(this.pedidoCompleto.pedido.fecha).toLocaleDateString('es-ES')}`, false, 50, y);
      y += 10;

      textWithStyles('Cantidad a pagar:', true, 10, y);
      textWithStyles(`$${this.pedidoCompleto.pedido.cant_a_pagar}`, false, 70, y);
      y += 10;

      textWithStyles('Propina:', true, 10, y);
      textWithStyles(`$${this.pedidoCompleto.pedido.propina}`, false, 70, y);
      y += 10;

      textWithStyles('Total con propina:', true, 10, y);
      textWithStyles(`$${this.pedidoCompleto.pedido.total}`, false, 70, y);
      y += 10;

      doc.save('comprobante.pdf');
    };

    renderPDF();
  }

  cambiarEstado() {
    this.productosService.actualizarPedido(this.idPedidoSeleccionado, this.estadoPedidoSeleccionado).subscribe((respuesta: any) => {
      this.respuesta = respuesta;
      if (this.respuesta.estado === 1) {
        this.mensajeExito = "Estado actualizado con éxito";

        // actualizar el estado en la lista de pedidos en el pedido seleccionado
        this.pedidos = this.pedidos.map((p: any) => {
          if (p.pedido.id === this.idPedidoSeleccionado) {
            p.pedido.estado = this.estadoPedidoSeleccionado;
          }
          return p;
        });

      } else {
        this.mensajeError = "Error al actualizar el estado";
      }
    });
  }
}
