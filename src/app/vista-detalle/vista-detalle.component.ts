import { Component, OnInit } from '@angular/core';
import { ComunicadorService } from '../comunicador.service';
import { Tarea } from 'src/TareasInterface';

@Component({
  selector: 'app-vista-detalle',
  templateUrl: './vista-detalle.component.html',
  styleUrls: ['./vista-detalle.component.scss'],
})
export class VistaDetalleComponent  implements OnInit {
  tarea: any;

  constructor(private servicio: ComunicadorService) {
    this.tarea = this.servicio.mostrarDetalles();
  }

  ngOnInit() {}
}
