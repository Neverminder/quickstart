import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {Http} from '@angular/http';

@Component({
    template: `
        <div>
            <h1>Test</h1>
            <md-input-container>
                <input mdInput placeholder="Test" [mdAutocomplete]="testAutocomplete">
            </md-input-container>
            <md-autocomplete #testAutocomplete="mdAutocomplete" [displayWith]="displayName">
                <md-option *ngFor="let value of data | async" [value]="value">{{value.name}}</md-option>
            </md-autocomplete>
        </div>
    `,
})
export class TestComponent implements OnInit {

    data: any;

    constructor(private http: Http) {}

    ngOnInit(): void {
        console.log('test');
        this.http.get('/src/app/data/data.json').toPromise().then(data => this.data = data);
    }

    displayName(value: any) {
        return value ? value.name : value;
    }

}
