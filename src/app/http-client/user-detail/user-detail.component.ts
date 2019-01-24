import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent implements OnInit, OnChanges, OnDestroy {
  @Input() user;
  constructor() {
    console.log('CONSTRUCTOR');
  }
  ngOnInit() {
    console.log('CREATED');
  }
  ngOnChanges() {
    console.log('CHANGES', this.user);
  }
  ngOnDestroy() {
    console.log('DESTROY');
  }
}
