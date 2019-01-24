import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html'
})
export class HttpClientComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  trackByFn(index: number, element: any) {
    return element.id;
  }
}
