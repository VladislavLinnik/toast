import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

export interface Toastr {
  id: number;
  message: string;
  type: string;
  delay: number;
  timerId?: number;
}

export const MESSAGE_TYPE = {
  WARNING: 'warn',
  INFO: 'info',
  SUCCESS: 'success',
  ERROR: 'error'
};

@Injectable({
  providedIn: 'root'
})
export class MessagePopupService {
  toastrs = new Subject<Toastr>();

  constructor() { }

  showMessage(message: string, type: string, delay: number = 5000): void {
    this.toastrs.next({message, type, delay, id: Math.floor(Math.random() * Date.now())});
  }

  clear(timerId: number): void {
    clearTimeout(timerId);
  }
}
