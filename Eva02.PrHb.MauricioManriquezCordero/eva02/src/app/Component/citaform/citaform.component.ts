import { Component, EventEmitter, OnInit, Output } from '@angular/core'; // Importar Output y EventEmitter para emitir eventos
import { FormsModule, NgForm } from '@angular/forms'; // Agregar NgForm para controlar el formulario
import { IonCard, IonCardHeader, IonCardTitle, IonItem, IonInput, IonButton, IonNote } from '@ionic/angular/standalone'; // Importar los componentes de Ionic

@Component({
  selector: 'app-cita-form', // Selector del componente
  templateUrl: './citaform.component.html', // Ruta del archivo HTML
  styleUrls: ['./citaform.component.scss'], // Ruta del archivo SCSS
  standalone: true, // Establecer standalone en true
  imports: [IonCard, IonCardHeader, IonCardTitle, IonItem, IonInput, IonButton, FormsModule, IonNote], // Importar los componentes de Ionic
})
export class CitaFormComponent implements OnInit { // Implementar OnInit
  textoStr: string = ""; // Variable para almacenar el texto de la cita
  autorStr: string = ""; // Variable para almacenar el autor de la cita

  @Output() onCreate = new EventEmitter<{ texto: string; autor: string }>(); // Crear un evento de salida para crear una cita

  constructor() {}

  ngOnInit() {}

  // Función que se ejecuta al hacer click en el botón de crear cita
  onClick(form: NgForm) {
    console.log("producto::onClick");

    // Emitir evento con los datos de la cita
    this.onCreate.emit({ texto: this.textoStr, autor: this.autorStr });

    // Limpiar los valores y restablecer el formulario
    this.textoStr = ''; // Limpiar el texto
    this.autorStr = ''; // Limpiar el autor
    form.resetForm();  // Restablecer el formulario
  }
}

