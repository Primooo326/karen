import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargaComponent } from './pages/carga/carga.component';
import { FotosComponent } from './pages/fotos/fotos.component';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  {path: 'fotos', component: FotosComponent},
  {path: 'inicio', component: InicioComponent},
  {path:'carga', component: CargaComponent},

  {path: '**', pathMatch: 'full', redirectTo: 'inicio'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
