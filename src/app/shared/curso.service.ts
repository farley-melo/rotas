import { Injectable } from '@angular/core';
import {Curso} from '../cursos/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor() { }
  getCursos():Curso[]{
    return [
      new Curso(1,'angular','famoso framework front end'),
      new Curso(2,'java','write once run everywhere'),
      new Curso(3,'mysql','the best database for web sites')
    ];
  }

  getCurso(cursoId:number):Curso|null{
    let cursos:Curso[]=this.getCursos();
    for(let curso of cursos){
      if(curso.id==cursoId){
        console.log(curso.id);
        console.log(cursoId);
        return curso;
      }
    }
    return null;
  }
}
