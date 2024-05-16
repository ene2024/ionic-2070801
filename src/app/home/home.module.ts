import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import { TareasComponent } from '../tareas/tareas.component';
import { AgregarTareaComponent } from '../agregar-tarea/agregar-tarea.component';
import { VistaDetalleComponent } from '../vista-detalle/vista-detalle.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, TareasComponent, AgregarTareaComponent, VistaDetalleComponent]
})
export class HomePageModule {}
