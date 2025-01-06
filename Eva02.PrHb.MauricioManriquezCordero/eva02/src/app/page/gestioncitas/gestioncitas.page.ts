import { Component } from '@angular/core'; // Importar Component para la anotación
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/angular/standalone'; // Importar los componentes de Ionic  
import { OpcionesCitasComponent } from 'src/app/Component/opcionescitas/opcionescitas.component'; // Importar el componente de opciones de citas
import { CommonModule } from '@angular/common';  // Para usar el ngFor

@Component({
  selector: 'app-gestioncitas', // Selector del componente
  templateUrl: './gestioncitas.page.html', // Ruta del archivo HTML
  styleUrls: ['./gestioncitas.page.scss'], // Ruta del archivo SCSS
  standalone: true, // Para que funcione de forma independiente
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, OpcionesCitasComponent, CommonModule] // Importar los componentes de Ionic y el componente de opciones de citas
})

export class GestionPage {  // Clase del componente

  constructor( ) { }
}
