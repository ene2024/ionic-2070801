import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicadorService {
  private infoTarea = new BehaviorSubject<any>({});

  enviarTarea(nuevaTarea: object) {
    this.infoTarea.next(nuevaTarea);
  }

  recibirTarea() {
    return this.infoTarea.asObservable();
  }

  constructor() { }
}
