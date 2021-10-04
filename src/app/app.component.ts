import { Component } from '@angular/core';
import {MESSAGE_TYPE, MessagePopupService} from './message-popup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private messagePopupService: MessagePopupService) {
  }

  showSuccessToastr(): void {
    this.messagePopupService.showMessage('success message', MESSAGE_TYPE.SUCCESS);
  }

  showErrorToastr(): void {
    this.messagePopupService.showMessage('error message', MESSAGE_TYPE.ERROR);
  }

  showWarningToastr(): void {
    this.messagePopupService.showMessage('warning message', MESSAGE_TYPE.WARNING);
  }
}
