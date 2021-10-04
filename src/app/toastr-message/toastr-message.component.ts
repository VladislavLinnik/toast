import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Toastr} from '../message-popup.service';
import {MESSAGE_TYPE} from '../message-popup.service';

@Component({
  selector: 'app-toastr-message',
  templateUrl: './toastr-message.component.html',
  styleUrls: ['./toastr-message.component.scss']
})
export class ToastrMessageComponent implements OnInit {
  @Input() toastr!: Toastr;
  @Output() closed = new EventEmitter<Toastr>();

  readonly MESSAGE_TYPE = MESSAGE_TYPE;

  constructor() { }

  ngOnInit(): void {
  }

  isEqualMessageType(type: string): boolean {
    return (this.toastr.type === type);
  }

  closeToast(): void {
    this.closed.emit(this.toastr);
  }
}
