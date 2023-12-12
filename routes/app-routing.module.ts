// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { OperacionRecargaComponent } from './operacion-recarga/operacion-recarga.component';

const routes: Routes = [
  { path: 'registrar-usuario', component: RegistrarUsuarioComponent },
  { path: 'realizar-recarga', component: OperacionRecargaComponent },
  // Puedes agregar más rutas según sea necesario
  { path: '', redirectTo: '/registrar-usuario', pathMatch: 'full' },
  // Ruta predeterminada, redirige a 'registrar-usuario' por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
