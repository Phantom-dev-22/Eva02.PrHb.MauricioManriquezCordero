import { Injectable } from '@angular/core'; // Importa el decorador Injectable
import { Cita } from '../model/cita'; // Importa la clase Cita


@Injectable({
  providedIn: 'root',  // Para que esté disponible en toda la aplicación
})

export class CitasService { // Servicio para manejar las citas
  
  private _citas: Cita[] = [  // Lista de citas
    new Cita(" ", " ")       // Cita vacía
  ]

  constructor() {}

  getCitas(): Cita[] {     // Para obtener la lista de citas
    return this._citas    // Devuelve la lista de citas
  } 
  
  agregarCita(c:Cita) {    // Para agregar una cita
    this._citas.push(c);  // Agrega la cita a la lista
  }

  
}
