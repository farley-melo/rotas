import {Component, OnDestroy, OnInit} from '@angular/core';
import {CursoService} from '../shared/curso.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Curso} from '../cursos/curso';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-curso-detalhes',
  templateUrl: './curso-detalhes.component.html',
  styleUrls: ['./curso-detalhes.component.css']
})
export class CursoDetalhesComponent implements OnInit ,OnDestroy{
  curso:Curso;
  inscricao:Subscription;
  constructor(private cursoService:CursoService
              ,private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    this.inscricao=this.route.params.subscribe((param)=>{
       this.curso=this.cursoService.getCurso(param.id);
       if(this.curso==null){
         alert('curso nao encontrado');
           this.router.navigate(['']);

       }
    });
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

}
