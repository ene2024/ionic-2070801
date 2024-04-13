import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  mostrarTarjetas = true;
  mostrarBoton = true;
  mostrarFormulario = false;


  constructor() {}

  newForm() {
    this.mostrarTarjetas = false;
    this.mostrarBoton = false;
    this.mostrarFormulario = true;
  }

  recibirMostrarForm(mostrarForm: boolean) {
    this.mostrarFormulario = mostrarForm;
    this.mostrarTarjetas = !mostrarForm;
    this.mostrarBoton = !mostrarForm;
  }

}
