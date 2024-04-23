import { Component, OnInit } from '@angular/core';
import { ComunicadorService } from '../comunicador.service';
import { Tarea } from 'src/TareasInterface';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss'],
})
export class TareasComponent  implements OnInit {
  tareas: Tarea[] = [];

  constructor(private servicio: ComunicadorService) {
    this.tareas = servicio.recibirTareas();
  }

  ngOnInit() { }

}
