import { Component, OnInit } from '@angular/core'; // Importar Component y OnInit
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { IonContent, IonBackButton, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonToggle, IonButtons, IonIcon, IonButton } from '@ionic/angular/standalone';    // Importar los componentes de Ionic


@Component({
  selector: 'app-configuracion', // Nombre del selector
  templateUrl: './configuracion.page.html', // Ruta del archivo HTML
  styleUrls: ['./configuracion.page.scss'], // Ruta del archivo SCSS
  standalone: true, // Establecer standalone en true
  imports: [IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem, IonToggle, IonButtons]   // Importar los componentes de Ionic
})
export class ConfiguracionPage implements OnInit {

  constructor() {  

  }

  ngOnInit() {}


}
