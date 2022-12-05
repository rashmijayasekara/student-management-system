import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddStudentComponent } from './view/add-student/add-student.component';
import { ViewStudentComponent } from './view/view-student/view-student.component';
import {MatButtonModule} from "@angular/material/button";
import { WelcomeComponent } from './view/welcome/welcome.component';
import { NotFoundComponent } from './view/not-found/not-found.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    ViewStudentComponent,
    WelcomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
