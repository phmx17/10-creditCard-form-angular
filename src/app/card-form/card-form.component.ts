import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { DateFormControl } from '../date-form-control';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {
  cardForm = new FormGroup({
    name: new FormControl('', [   // '' could contain starter text
      Validators.required, 
      Validators.minLength(3), 
      Validators.maxLength(20),
      // Validators.pattern(/\s/) //  useless; just a random example allowing for only a sequence of spaces
    ]),
    cardNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16)
    ]),
    expiration: new DateFormControl('', [ // injecting targeted and detailed input selection feature for this field;
      Validators.required,
      Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/), // ^ =  start of string; can have a zero followed by 1-9 OR a One followed by 0-2; restricts January through December; followed by a forward slash('/') and then a sequence of 2 digits; $ makes sure the assertion happens at the end of entered string
    ]),
    securityCode: new FormControl('', [
      Validators.required,
      // just use mask instead !
      // Validators.min(0),
      // Validators.max(999),
      // Validators.minLength(3),
      // Validators.maxLength(3),
      
    ]),
    phoneNumber: new FormControl('', [
      Validators.minLength(10),
      Validators.maxLength(10),
      // use mask instead
      // Validators.pattern(/\d{3}-\d{3}-\d{4}/) // limit to only 3 chars; but will allow more until field is left.
    ])

  })
  constructor() { }

  ngOnInit(): void {
  };

  onSubmit() {
    console.log('form was submitted');    
  }
  onReset() {
    this.cardForm.reset();  // resets properties of FormControl objects to null = 'cannot read property of undefined....'
  }

}
