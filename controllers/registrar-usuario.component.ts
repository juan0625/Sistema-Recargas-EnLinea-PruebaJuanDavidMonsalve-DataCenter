// registrar-usuario.component.ts
import { Component } from '@angular/core';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent {
  usuario = {
    nombre: '',
    apellido: '',
    correo: '',
    contrasena: ''
  };

  constructor(private usuarioService: UsuarioService) { }

  registrarUsuario() {
    this.usuarioService.registrarUsuario(this.usuario).subscribe(
      response => {
        console.log('Usuario registrado exitosamente', response);
        // Puedes redirigir a otra página o realizar otras acciones después del registro
      },
      error => {
        console.error('Error al registrar usuario', error);
        // Manejar errores aquí
      }
    );
  }
}
