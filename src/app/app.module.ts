import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import {MatButtonModule, MatCheckboxModule, MatTableModule} from "@angular/material";
import {PrivacyvaultdataService} from "./privacyvaultdata.service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [
    PrivacyvaultdataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
