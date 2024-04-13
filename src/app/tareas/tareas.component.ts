import { Component, OnInit } from '@angular/core';
import { ComunicadorService } from '../comunicador.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss'],
})
export class TareasComponent  implements OnInit {
  tareas: Array<any>;

  constructor(private servicio: ComunicadorService) {
    this.tareas = [
      {nombre: "Llevar a Bruno al veterinario", mes: "05", anio: "2024", descripcion: "Adios", mostrarDescripcion: false},
      {nombre: "Recordar tarea de Aplicaciones Móviles", mes: "05", anio: "2024", descripcion: "Hola", mostrarDescripcion: false}
    ]
  }

  ngOnInit() {
  //   this.servicio.recibirTarea().subscribe(tareaNueva => {
  //   this.tareas.push(tareaNueva);
  // })
  }

}
