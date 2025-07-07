import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  iniciarSesion() {
    if (!this.email.includes('@') || !this.email.includes('.')) {
      alert('Por favor, ingresa un correo válido.');
      return;
    }

    if (this.password.trim().length < 4) {
      alert('La contraseña debe tener al menos 4 caracteres.');
      return;
    }

    alert('Bienvenido a Punto Dulce 🎂');
  }
}


