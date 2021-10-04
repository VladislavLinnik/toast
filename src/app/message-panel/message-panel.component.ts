import {Component, OnInit} from '@angular/core';
import {animate, animateChild, query, style, transition, trigger} from '@angular/animations';

import {MessagePopupService, Toastr} from '../message-popup.service';

@Component({
  selector: 'app-message-panel',
  templateUrl: './message-panel.component.html',
  styleUrls: ['./message-panel.component.scss'],
  animations: [
    trigger('closeToaster', [
      transition('* => void', [
        animate('.5s linear', style({
          height: 0
        }))
      ]),
      transition(':leave', [
        query('@', animateChild())
      ])
    ])
  ]
})
export class MessagePanelComponent implements OnInit {
  toastrs: Toastr[] = [];

  constructor(private messagePopupService: MessagePopupService) { }

  ngOnInit(): void {
    this.messagePopupService.toastrs
      .subscribe((toastr: Toastr) => {
      let timerId = setTimeout(() => {
        this.toastrs = this.toastrs.filter(x => x.id !== toastr.id);
        this.messagePopupService.clear(timerId);
      }, toastr.delay);
      toastr.timerId = timerId;
      this.toastrs.push(toastr);
    });
  }

  public toastrById = (id: number, item: Toastr) => item.id;

  onClosed(toastr: Toastr): void {
    this.toastrs = this.toastrs.filter(x => x.id !== toastr.id);
    clearTimeout(toastr.timerId);
  }
}
