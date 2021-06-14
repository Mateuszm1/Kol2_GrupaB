import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MWForumComponent } from './components/mw-forum/mw-forum.component';
import { MWForumItemComponent } from './components/mw-forum-item/mw-forum-item.component';
import { MWForumDetailsComponent } from './components/mw-forum-details/mw-forum-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MWForumComponent,
    MWForumItemComponent,
    MWForumDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
