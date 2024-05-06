import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

    constructor(private authService: AuthService) { }

    ngOnInit(): void {
        this.authService.login({ email: 'tm02arnold@gmail.com', clave: '123' }).subscribe((data: any) => {
            console.log(data);
        });
    }

    


    login(value: any) {
        console.log(value);
    }
}
