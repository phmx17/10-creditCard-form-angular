import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() control: FormControl;
  @Input() label: string;
  @Input() mask: string;
  constructor() { }

  ngOnInit(): void { }

  showErrors() {  // simple refactor to take load off of template
    const { dirty, touched, errors } = this.control;
    return dirty && touched && errors
  };

}
