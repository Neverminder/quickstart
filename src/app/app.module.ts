import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}  from './app.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {HttpModule} from '@angular/http';
import {MdDatepickerModule, MdInputModule, MdNativeDateModule, MdSelectModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    NgxDatatableModule,
    HttpModule,
    MdInputModule,
    MdDatepickerModule,
    MdNativeDateModule,
    BrowserAnimationsModule,
    FormsModule,
    MdSelectModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
