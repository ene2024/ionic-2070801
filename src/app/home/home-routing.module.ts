import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { VistaDetalleComponent } from '../vista-detalle/vista-detalle.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'tareaDetalle',
    component: VistaDetalleComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
