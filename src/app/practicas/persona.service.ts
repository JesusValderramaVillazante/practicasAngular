import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Persona } from './persona';
import { PERSONAS } from './mock-personas';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor() { }

  getHeroes(): Observable<Persona[]> {
    return of(PERSONAS);
  }

  geto(): Observable<any> {
    const a = {a: 'a', b: 'b'};
    return of(a);
  }
}
