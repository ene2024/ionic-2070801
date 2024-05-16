import { Component, OnInit } from '@angular/core';
import { ComunicadorService } from '../comunicador.service';
import { Tarea } from 'src/TareasInterface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss'],
})
export class TareasComponent  implements OnInit {
  tareas: Tarea[] = [];

  constructor(private servicio: ComunicadorService, private router: Router) {
    this.tareas = servicio.recibirTareas();
  }

  mostrarDetalle(tareaNombre: String) {
    let tareaServidor = this.servicio.obtenerTarea(tareaNombre);
    if (tareaServidor == null)
      return;
    this.router.navigate(['/home/tareaDetalle/']);
    this.servicio.enviarDetalles(tareaServidor);
  }

  ngOnInit() { }

}
