import { Component, OnInit, Input } from '@angular/core';
import { Observable, interval, timer } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-ejm2',
  templateUrl: './ejm2.component.html'
})
export class Ejm2Component implements OnInit {
  constructor() { }
  ngOnInit() {
    /*
    this.ejmInterval().subscribe(v => {
      console.log(v);
    });
    */

    this.ejmTime().subscribe(v => {
      console.log(v);
    });
  }

  ejmInterval(): Observable<any> {
    return interval(1000);
  }

  ejmTime(): Observable<any> {
    return timer(2000, 1000).pipe(
      map(x => x * 3)
    );
  }
}
