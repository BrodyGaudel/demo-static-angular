import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ListEmployeeComponent } from './composants/list-employee/list-employee.component';
import { AjouterEmployeeComponent } from './composants/ajouter-employee/ajouter-employee.component';
import { ModifierEmployeeComponent } from './composants/modifier-employee/modifier-employee.component';
import { NavbarComponent } from './composants/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeeComponent,
    AjouterEmployeeComponent,
    ModifierEmployeeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
