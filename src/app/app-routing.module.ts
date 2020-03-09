import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CursosComponent} from './cursos/cursos.component';
import {CursoDetalhesComponent} from './curso-detalhes/curso-detalhes.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path:'curso',component:CursosComponent},
  {path:'curso/:idCurso',component:CursoDetalhesComponent},
  {path:'',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
