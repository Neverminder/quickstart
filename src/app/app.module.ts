import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {HttpModule} from '@angular/http';

@NgModule({
  imports:      [ BrowserModule, NgxDatatableModule, HttpModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
