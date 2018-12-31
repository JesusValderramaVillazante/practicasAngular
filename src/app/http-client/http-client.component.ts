import { Component, OnInit } from '@angular/core';
import { ConfigServiceService } from './config/config-service.service';

export interface Config {
  heroesUrl: string;
  textfile: string;
}

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css']
})
export class HttpClientComponent implements OnInit {
  config: Config;

  constructor(private configService: ConfigServiceService) { }

  ngOnInit() {
    this.showConfig();
  }

  showConfig() {
    this.configService.getConfig()
      // clone the data object, using its known Config shape
      .subscribe((data: Config) => this.config = { ...data });
  }
}
