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
  //////////////////
  countryForm: FormGroup;
  countries = [{
    id: '8f8c6e98',
    name: 'USA'
  },
  {
    id: '169fee1a',
    name: 'Canada'
  },
  {
    id: '3953154c',
    name: 'UK'
  }];
  //////////////////
  constructor(private formBuilder: FormBuilder) { }

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

    ////////////
    this.countryForm = this.formBuilder.group({
      countryControl: [this.countries[1]]
    });
    /*
        setTimeout(() => {
          this.countries = [
            {
              id: '8f8c6e98',
              name: 'USA',
            },
            {
              id: '169fee1a',
              name: 'Canada',
            },
            {
              id: '3953154c',
              name: 'UK'
            },
            {
              id: '68c61e29',
              name: 'otro valor'
            }
        ];
        }, 10000);
    */
  }

  cambiarDatos() {
    this.countries = [
      {
        id: '8f8c6e98',
        name: 'USA',
      },
      {
        id: '169fee1a',
        name: 'Canada',
      },
      {
        id: '3953154c',
        name: 'UK'
      },
      {
        id: '68c61e29',
        name: 'otro valor'
      }
    ];
  }
 // Sigue el algoritmo de comparación de opción para el
  // seguimiento de identidades cuando la comprobación para cambios.
  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
}
