import { CommonModule } from '@angular/common';   // Para usar el ngFor
import { Component, Input, OnInit } from '@angular/core'; // Importar Component y OnInit
import { Cita } from 'src/app/model/cita'; // Importar el modelo de Cita
import { IonItem, IonList, IonLabel, IonIcon, IonCol, IonGrid, IonRow  } from '@ionic/angular/standalone'; // Importar los componentes de Ionic
import { addIcons } from 'ionicons'; // Importar addIcons
import { trashOutline } from 'ionicons/icons'; // Importar el ícono de eliminar

@Component({
  selector: 'app-cita-list', // Selector del componente
  templateUrl: './citalist.component.html', // Ruta del archivo HTML
  styleUrls: ['./citalist.component.scss'], // Ruta del archivo SCSS
  standalone: true, // Establecer standalone en true
  imports: [CommonModule, IonItem, IonLabel, IonIcon, IonCol, IonGrid, IonRow] // Importar los componentes de Ionic
})

export class CitaListComponent  implements OnInit { // Clase del componente

  @Input() citas: Cita[] = []   // Lista de citas

  constructor() {
      addIcons({trashOutline}); } // Agregar el ícono de eliminar

  ngOnInit() {}

  eliminarCita(index: number): void { // Función para eliminar una cita
    this.citas.splice(index, 1); // Eliminar la cita
  }

}
