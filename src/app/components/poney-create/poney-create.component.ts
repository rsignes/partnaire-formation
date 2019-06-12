import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'par-poney-create',
  templateUrl: './poney-create.component.html',
  styleUrls: ['./poney-create.component.scss']
})
export class PoneyCreateComponent implements OnInit {

  poneyForm: FormGroup

  errorMessages: Object = {
    required: 'Ce champ est requis',
    minlength: '2 caractères minimum'
  }

  constructor() { }

  ngOnInit() {
    this.poneyForm = new FormGroup({
      name: new FormControl('', [ Validators.required, Validators.minLength(2) ]),
      img: new FormControl('', [ Validators.required ])
    })
  }
  
  handleSubmit() {
    console.log(this.poneyForm)
  }
}
