import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {Http} from '@angular/http';

@Component({
    template: `
        <div>
            <h1>Test</h1>
            <md-select placeholder="Data" name="name">
                <md-option *ngFor="let value of data" [value]="value.name">
                    {{value.name}}
                </md-option>
            </md-select>
        </div>
    `,
})
export class TestComponent implements OnInit {

    data: any;

    constructor(private http: Http) {}

    ngOnInit(): void {
        this.http.get('/app/data/data.json').toPromise().then(res => this.data = res.json());
    }

}
