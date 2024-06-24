import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../pedidos/pedidos.service';
import { ProductosService } from '../agregar-producto/productos.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [PedidosService]
})
export class DashboardComponent implements OnInit {

cerrarSesion() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    window.location.href = '/login';
}

  totalItems: number = 0;

  constructor(private productosService: ProductosService) { }

  productos: any = [];
  totalProductos: number = 0;

  ngOnInit() {
    this.productosService.getPedidos().subscribe((respuesta: any) => {
      const pedidos = respuesta.pedidos.filter((p: any) => p.usuario !== null);

      const pedidosConImagen = pedidos.map((p: any) => {
        if (p.usuario.Usuario.imagen_perfil === null) {
          p.usuario.Usuario.imagen_perfil = "../../assets/img/foto_default.png";
        }
        return p;
      });

      // Actualizar el total de ítems para la visualización en el dashboard
      this.totalItems = pedidosConImagen.length;
    });

    this.productosService.getProductos().subscribe((data: any) => {
      // si los productos de la respuesta tienen visible en true, los agregamos al array de productos
      this.productos = data.productos.filter((p: any) => p.visible);

      // Actualizar el total de ítems para la visualización en el dashboard
      this.totalProductos = this.productos.length;
    });
  }
}
