// operacion-recarga.component.ts
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-operacion-recarga',
  templateUrl: './operacion-recarga.component.html',
  styleUrls: ['./operacion-recarga.component.css']
})
export class OperacionRecargaComponent implements OnInit {
  // Implementar lógica para realizar recargas

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }
}
