import { Component, OnInit, Input } from '@angular/core';
import { PersonaService } from '../persona.service';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { Persona } from '../persona';

@Component({
  selector: 'app-ejm1',
  templateUrl: './ejm1.component.html',
  styleUrls: ['./ejm1.component.css']
})
export class Ejm1Component implements OnInit {
  public nombres$: Observable<any>;
  public valores: string;
  public val: string;

  constructor(private ps: PersonaService) { }
  ngOnInit() {
    this.nombres$ = this.ps.getHeroes();
  }

  datos(event) {
    console.log(this.valores);
    this.cambioDatos(this.valores);
  }

  cambioDatos(valor: string) {
    this.nombres$ = this.ps.getHeroes().pipe(
      map(
        pers => pers.filter(v => {
          return v.nombre.includes(valor);
        })
      )
    );
  }

  nmc() {
    console.log(this.val);
  }
}
