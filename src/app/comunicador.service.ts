import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Tarea } from 'src/TareasInterface';

@Injectable({
  providedIn: 'root'
})
export class ComunicadorService {
  private TareaArray: Tarea[] = [];

  enviarTarea(nuevaTarea: Tarea) {
    this.TareaArray.push(nuevaTarea);
  }

  recibirTareas() {
    return this.TareaArray;
  }

  borrarTarea(nombreTarea: String) {
    let index = 0;
    if (nombreTarea != '' && nombreTarea != undefined) {
      for (let tarea of this.TareaArray) {
        if (tarea.nombre.toUpperCase() == nombreTarea.toUpperCase()) {
          this.TareaArray.splice(index, 1);
          alert('Tarea eliminada con éxito');
          console.log('Eliminado con éxito');
          return;
        }
        else {
          index++;
        }
      }
    }
    alert('No se encontró la tarea con ese nombre');
    console.log('No se ha encontrado la tarea');
  }

  constructor() { }
}
