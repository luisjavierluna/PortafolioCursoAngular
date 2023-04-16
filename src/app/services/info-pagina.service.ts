import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {}
  cargada = false

  equipo: any[] = []
  equipoKey: string = 'equipo'

  constructor(private http: HttpClient) {

    this.cargarInfo()
    this.cargarEquipo()
  }

  private cargarInfo() {
    // Leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
    .subscribe({
      next: (resp: InfoPagina) => {
        this.cargada = true
        this.info = resp
      } 
    })
  }

  private cargarEquipo() {
    // Leer el archivo JSON
    this.http.get<any>('https://angular-hml-default-rtdb.firebaseio.com/.json')
    .subscribe({
      next: resp => {
        this.equipo = resp[this.equipoKey]
      } 
    })
  }
}
