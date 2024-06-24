import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './usuarios.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent implements OnInit {

  usuarios: any = [];
  usuarioSeleccionado: any = {};
  mensajeError: string = '';
  mensajeExito: string = '';

  cargarUsuario(usuario: any) {
    this.usuarioSeleccionado = usuario;

  }


  editarRol() {
    this.usuarioService.actualizarRol(this.usuarioSeleccionado).subscribe((data: any) => {
      if (data.estado === 1) {
        this.mensajeExito = data.mensaje;
      } else {
        this.mensajeError = data.mensaje;
      }

      setTimeout(() => {
        this.mensajeError = '';
        this.mensajeExito = '';
      }, 3000);

    });
  }

  cerrarSesion() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    window.location.href = '/login';
  }

  constructor(private usuarioService: UsuariosService) { }

  ngOnInit(): void {
    // Obtener los usuarios
    this.usuarioService.obtenerUsuarios().subscribe((data: any) => {
      this.usuarios = data.usuarios;
    });
  }
}
