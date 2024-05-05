import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  /*
  <!-- formulario de Login
    - Se utiliza la directiva ngForm para el formulario
    - Se utiliza la directiva ngModel para el binding de los campos del formulario
    - Se utiliza la directiva ngSubmit para el evento de submit del formulario
    - Se utiliza la directiva ngIf para mostrar mensajes de error

    - Se utiliza la directiva ngClass para agregar clases de error a los campos del formulario
    - Se utiliza la directiva ngClass para agregar clases de error al formulario
 -->

<div class="container">
    <div class="row">
        <div class="col-md-6 col-md-offset-3">
            <h2>Login</h2>
            <form #f="ngForm" (ngSubmit)="login(f.value)" novalidate>
                <div class="form-group" [ngClass]="{'has-error': email.invalid && email.touched}">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" name="email" ngModel #email="ngModel" required>
                    <div class="help-block" *ngIf="email.invalid && email.touched">
                        Email is required
                    </div>
                </div>
                <div class="form-group" [ngClass]="{'has-error': password.invalid && password.touched}">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" name="password" ngModel
                        #password="ngModel" required>
                    <div class="help-block" *ngIf="password.invalid && password.touched">
                        Password is required
                    </div>
                </div>
                <button type="submit" class="btn btn-primary" [disabled]="f.invalid">Login</button>
            </form>
        </div>
    </div>
</div>
  */

  // impleentacion de la funcion login en el componente 

  login(value: any) {
    console.log(value);
  }

  // fin de la implementacion de la funcion login

}
