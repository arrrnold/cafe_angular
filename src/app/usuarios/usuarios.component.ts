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

  editarRol() {
    console.log(this.usuarioSeleccionado);
    this.usuarioService.actualizarRol(this.usuarioSeleccionado).subscribe((data: any) => {
      console.log(data);
    });
  }

  usuarioSeleccionado: any = {};

  cargarUsuario(usuario: any) {
    console.log(usuario);
    this.usuarioSeleccionado = usuario;

  }

  usuarios: any = [];

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
      console.log(this.usuarios);
    });
  }
}
