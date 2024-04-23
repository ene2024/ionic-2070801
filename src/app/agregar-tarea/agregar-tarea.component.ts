import { Component, EventEmitter, OnInit, Output, output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ComunicadorService } from '../comunicador.service';
import { Tarea } from 'src/TareasInterface';

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.component.html',
  styleUrls: ['./agregar-tarea.component.scss'],
})
export class AgregarTareaComponent  implements OnInit {
  @Output() mostrarForm = new EventEmitter<boolean>();

  nuevaTarea: Tarea = {
    nombre: '',
    anio: '',
    mes: '',
    descripcion: '',
    mostrarDescripcion: false
  };

  constructor(private servicio: ComunicadorService) {}

  onSubmit(tareaForm: NgForm) {
    // Validar que los datos no sean vacios
    if (!tareaForm.valid) {
      alert("Rellena todos los campos!");
      return;
    }

    // Pasar info a servicio para que lo guarde en el array
    this.servicio.enviarTarea(this.nuevaTarea);

    // Oculto el formulario
    this.mostrarForm.emit(false);
  }


  ngOnInit() {}

}
