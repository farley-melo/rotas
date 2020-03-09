import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoDetalhesComponent } from './curso-detalhes/curso-detalhes.component';
import {CursoService} from './shared/curso.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CursosComponent,
    CursoDetalhesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CursoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
