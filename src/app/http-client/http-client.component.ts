import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html'
})
export class HttpClientComponent implements OnInit {
  public users = [
    {id: 1, name: 'jesus'},
    {id: 2, name: 'pepe'},
  ];

  constructor() { }
  ngOnInit() {
  }

  ///////////
  refresh() {
    this.users = [
      {id: 1, name: 'jesus'},
      {id: 2, name: 'pepe'},
      {id: 3, name: 'julio'},
      {id: 4, name: 'junior'}
    ];
  }
  trackByFn(index: number, element: any) {
    return element.id;
  }
  ///////////
}
