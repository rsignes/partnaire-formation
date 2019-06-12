import { AddPoney } from './../../store/actions/poney.actions';
import { Store } from '@ngrx/store';
import { AppState } from './../../app.state';
import { Observable, pipe } from 'rxjs';
import { RaceService } from './../../services/race.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { map } from 'rxjs/operators'

@Component({
  selector: 'par-poney-create',
  templateUrl: './poney-create.component.html',
  styleUrls: ['./poney-create.component.scss']
})
export class PoneyCreateComponent implements OnInit {

  poneyForm: FormGroup

  errorMessages: Object = {
    required: 'Ce champ est requis',
    minlength: '2 caractères minimum',
    gifRequired: 'L\'image doit avoir l\'extension .gif',
    nameShouldBeUnique: 'Le nom n\'est pas disponible'
  }

  constructor(
    private raceService: RaceService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.poneyForm = new FormGroup({
      name: new FormControl('', [ Validators.required, Validators.minLength(2) ], [ this.nameShouldBeUnique.bind(this) ]),
      img: new FormControl('', [ Validators.required, this.gifRequired ])
    })
  }

  gifRequired(control: FormControl): undefined | ValidationErrors {
    let regExp = new RegExp('.+\.gif$')

    return regExp.test(control.value) ? undefined : {
      gifRequired: true
    }
  }

  nameShouldBeUnique(control: FormControl): Observable<undefined | ValidationErrors> {
    return this.raceService.checkIfNameIsUnique(control.value).pipe(map(isUnique => {
      return isUnique ? undefined : {
        nameShouldBeUnique: true
      }
    }))
  }
  
  handleSubmit() {
    this.store.dispatch(new AddPoney(this.poneyForm.value))
  }
}
