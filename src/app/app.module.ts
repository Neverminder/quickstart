import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}  from './app.component';
import {HttpModule} from '@angular/http';
import {MdAutocompleteModule, MdButtonModule, MdInputModule, MdSelectModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {routing} from './app.routing';
import {TestComponent} from './components/test.component';

@NgModule({
    imports: [
        routing,
        BrowserModule,
        HttpModule,
        MdInputModule,
        BrowserAnimationsModule,
        FormsModule,
        MdSelectModule,
        MdAutocompleteModule,
        MdButtonModule
    ],
    declarations: [
        AppComponent,
        TestComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
