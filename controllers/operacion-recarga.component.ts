// operacion-recarga.component.ts
import { Component } from '@angular/core';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-operacion-recarga',
  templateUrl: './operacion-recarga.component.html',
  styleUrls: ['./operacion-recarga.component.css']
})
export class OperacionRecargaComponent {
  montoRecarga: number;

  constructor(private usuarioService: UsuarioService) { }

  realizarRecarga() {
    // Supongamos que tienes una función en usuarioService para realizar recargas
    this.usuarioService.realizarRecarga(this.montoRecarga).subscribe(
      response => {
        console.log('Recarga realizada exitosamente', response);
        // Puedes redirigir a otra página o realizar otras acciones después de la recarga
      },
      error => {
        console.error('Error al realizar recarga', error);
        // Manejar errores aquí
      }
    );
  }
}
