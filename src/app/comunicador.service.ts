import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Tarea } from 'src/TareasInterface';

@Injectable({
  providedIn: 'root'
})
export class ComunicadorService {
  private TareaArray: Tarea[] = [];

  enviarTarea(nuevaTarea: Tarea) {
    // Se valida antes de llamar a la función
    this.TareaArray.push(nuevaTarea);
  }

  recibirTareas() {
    return this.TareaArray;
  }

  constructor() { }
}
