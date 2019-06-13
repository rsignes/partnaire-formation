import { Observable } from 'rxjs';
import { MessageModalService } from './../../services/message-modal.service';
import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'par-message-modal',
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.scss']
})
export class MessageModalComponent implements OnInit {

  isOpen$: Observable<string>

  constructor(
    public messageModal: MessageModalService
  ) { }

  ngOnInit() {
    this.isOpen$ = this.messageModal.isOpen$
  }

  close() {
    this.messageModal.closeModal()
  }
}
