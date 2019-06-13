import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageModalService {

  private _isOpen$: Subject<string> = new Subject()

  openModal(message: string) {
    this._isOpen$.next(message)
  }

  closeModal() {
    this._isOpen$.next('')
  }

  get isOpen$(): Observable<string> {
    return this._isOpen$
  }

  constructor() { }
}
