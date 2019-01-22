import { Component, OnInit } from '@angular/core';
import { ConfigServiceService } from './config/config-service.service';

export interface Config {
  heroesUrl: string;
  textfile: string;
}
@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css'],
})
export class HttpClientComponent implements OnInit {
  config: Config;
  users = [
    {id: 1, name: 'jesus'},
    {id: 2, name: 'pepe'},
  ];
  constructor(private configService: ConfigServiceService) { }

  ngOnInit() {
    this.showConfig();
  }

  refresh() {
    this.users = [
      {id: 1, name: 'jesus'},
      {id: 2, name: 'pepe'},
      {id: 3, name: 'julio'},
      {id: 4, name: 'junior'}
    ];
  }

  showConfig() {
    this.configService.getConfig()
      // clone the data object, using its known Config shape
      .subscribe((data: Config) => this.config = { ...data });
  }

  trackByFn(index: number, element: any) {
    return element.id;
  }
}
