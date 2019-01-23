import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {
  form: FormGroup;
  formDatos: any = {};
  orders = [
    { id: 1, name: 'order 1' },
    { id: 2, name: 'order 2' },
    { id: 3, name: 'order 3' },
    { id: 4, name: 'order 4' }
  ];
  constructor(private formBuilder: FormBuilder) {
  }

  submit() {
    console.log('ok');
    this.formDatos = this.form.value.orders;
  }

  ngOnInit() {
    const controls = this.orders.map(c => {
    if (true) {
      return new FormControl(true);
    }
    });

    this.form = this.formBuilder.group({
      orders: new FormArray(controls)
    });

    this.form.get('orders').get('1').setValue(false);
  }

}
