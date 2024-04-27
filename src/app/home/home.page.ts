import { Component, QueryList, ViewChild, ViewChildren, viewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { ComunicadorService } from '../comunicador.service';
import { Tarea } from 'src/TareasInterface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChildren(IonModal) modals!: QueryList<IonModal>;

  nombreEliminar: String = '';


  constructor(private servicio: ComunicadorService) {}

  eliminarTarea(nombreTarea: String) {
    if (nombreTarea == '' || nombreTarea == undefined) {
      alert('Rellena el campo solicitado');
      return;
    }
    this.servicio.borrarTarea(nombreTarea);
    this.nombreEliminar = '';
  }

  cancelar(pos: number) {
    this.modals.toArray()[pos].dismiss(null, 'cancelar');
  }
}
