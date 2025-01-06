import { Component, OnInit } from '@angular/core'; // Importar Component y OnInit
import { addIcons } from 'ionicons'; // Para agregar iconos adicionales
import { IonButton, IonIcon, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone'; // Importar los componentes de Ionic
import { RouterModule } from '@angular/router'; // Importar el módulo de rutas
import { buildOutline, settingsOutline } from 'ionicons/icons'; // Asegúrate de que los iconos estén importados correctamente
import { CommonModule } from '@angular/common'; // Para usar el ngFor

@Component({
  selector: 'app-home', // Selector para el componente
  templateUrl: 'home.page.html', // Ruta del archivo HTML
  styleUrls: ['home.page.scss'], // Ruta del archivo SCSS
  standalone: true,
  imports: [CommonModule, IonButton, IonIcon, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, RouterModule],
})
export class HomePage implements OnInit {
  // Definimos un arreglo de citas
  citas = [
    { texto: "La vida es lo que pasa mientras estás ocupado haciendo otros planes.", autor: "John Lennon" },
    { texto: "El único modo de hacer un gran trabajo es amar lo que haces.", autor: "Steve Jobs" },
    { texto: "Me enamoré de la vida, es la única que no me dejará sin antes yo hacerlo.", autor: "Pablo Neruda" },
    { texto: "Y he llegado a la conclusión de que si las cicatrices enseñan, las caricias también", autor: "Mario Benedetti" },
    { texto: "Si siempre intentas ser normal nunca descubrirás lo extraordinario que puedes llegar a ser.", autor: "Maya Angelou" },
    { texto: "Sólo una cosa es clara: que la carne se llena de gusanos", autor: "Nicanor Parra" },

  ];

  // Cita seleccionada para mostrar
  selectedCita: any;

  constructor() {
    addIcons({ buildOutline, settingsOutline }); // Asegúrate de agregar los íconos correctamente
  }

  ngOnInit() {
    this.mostrarCitaAleatoria(); // Mostrar cita aleatoria al iniciar
  }

  // Método para mostrar una cita aleatoria
  mostrarCitaAleatoria() {
    const randomIndex = Math.floor(Math.random() * this.citas.length); // Obtener un índice aleatorio
    this.selectedCita = this.citas[randomIndex]; // Asignar la cita seleccionada
  }
}
