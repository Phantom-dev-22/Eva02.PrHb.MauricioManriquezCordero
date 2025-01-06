import { Component, OnInit } from '@angular/core'; // Importar Component y OnInit
import { CitaListComponent } from '../citalist/citalist.component'; // Importar el componente de la lista de citas
import { CitaFormComponent } from '../citaform/citaform.component'; // Importar el componente del formulario de citas  
import { CitasService } from 'src/app/service/citas.service'; // Importar el servicio de citas
import { Cita } from 'src/app/model/cita'; // Importar el modelo de Cita

@Component({
  selector: 'app-opciones-citas', // Selector del componente
  templateUrl: './opcionescitas.component.html', // Ruta del archivo HTML
  styleUrls: ['./opcionescitas.component.scss'], // Ruta del archivo SCSS
  standalone: true, // Establecer standalone en true
  imports: [CitaListComponent, CitaFormComponent] // Importar los componentes de la lista y el formulario de citas
})

export class OpcionesCitasComponent  implements OnInit { // Clase del componente
  
  listaCitas:Cita[] = []    // // Lista para almacenar las citas

  constructor(
    private citasService:CitasService   // Inyección del servicio
  ) {}

  ngOnInit() {  // Cuando se carga el GestionPage ocupa el servicio para recuperar las citas en memoria
    this._actualizar()  // Luego que ingresa una cita, actualiza el arreglo
  }

  private _actualizar() {
    this.listaCitas = this.citasService.getCitas()    // Recupero y guardo los datos
  }
    

  onCreateCita($event: { texto: string; autor: string }) {
    // Crear una nueva instancia de Cita usando los parámetros recibidos
    const cita = new Cita($event.texto, $event.autor);
    this.citasService.agregarCita(cita); // Agregar la cita al servicio
    this.listaCitas = this.citasService.getCitas(); // Actualizar la lista local
    this._actualizar();
    
  }

}
