import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUesrsComponent } from './list-uesrs/list-uesrs.component';
import { ReposComponent } from './repos/repos.component';
import { LoginComponent } from './login/login.component';
import { SearchPipe } from './searchpipe';
@NgModule({
  declarations: [
    AppComponent,
    ListUesrsComponent,
    ReposComponent,
    LoginComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
