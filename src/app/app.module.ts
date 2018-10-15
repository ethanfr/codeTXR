import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClassComponent } from './component/class.component';
import { BtnComponent } from './component/btn/btn.component';
import { EvtComponent } from './component/evt/evt.component';
import { BindComponent } from './component/bind/bind.component';
import { ModelComponent } from './component/model/model.component';
import { ListviewComponent } from './component/listview/listview.component';
import { ChannelDetailComponent } from './component/channel-detail/channel-detail.component';
import { Listview2Component } from './component/listview2/listview2.component';
import { ForgetComponent } from './component/forget/forget.component';
import { StickieComponent } from './component/stickie/stickie.component';
import { HeaderComponent } from './component/header/header.component';

@NgModule({
  declarations: [
    AppComponent,ClassComponent,BtnComponent, EvtComponent, BindComponent, ModelComponent, ListviewComponent, ChannelDetailComponent, Listview2Component, ForgetComponent, StickieComponent, HeaderComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
