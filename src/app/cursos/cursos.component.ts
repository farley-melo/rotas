import { Component, OnInit } from '@angular/core';
import {CursoService} from '../shared/curso.service';
import {Curso} from './curso';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  cursos:Curso[];
  constructor(private cursoService:CursoService) { }

  ngOnInit() {
    this.cursos=this.cursoService.getCursos();
  }

}
