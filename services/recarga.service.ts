// recarga.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecargaService {
  private apiUrl = 'http://localhost:8080/api/recargas';

  constructor(private http: HttpClient) { }

  realizarRecarga(monto: number): Observable<any> {
    // Supongamos que el backend espera un objeto con el monto
    const recargaData = { monto: monto };
    return this.http.post(`${this.apiUrl}/realizar`, recargaData);
  }

  consultarSaldo(): Observable<any> {
    return this.http.get(`${this.apiUrl}/saldo`);
  }

  consultarHistorialRecargas(): Observable<any> {
    return this.http.get(`${this.apiUrl}/historial`);
  }

  // Puedes agregar más métodos según sea necesario
}
