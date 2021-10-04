import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MessagePanelComponent } from './message-panel/message-panel.component';
import { ToastrMessageComponent } from './toastr-message/toastr-message.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MessagePanelComponent,
    ToastrMessageComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
