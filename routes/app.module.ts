// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { OperacionRecargaComponent } from './operacion-recarga/operacion-recarga.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarUsuarioComponent,
    OperacionRecargaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule // Importa el módulo de rutas aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
