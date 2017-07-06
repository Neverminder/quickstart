import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Component({
    template: `
        <div>
            <h1>Home</h1>
            <button md-button routerLink="/test">Go to test</button>
        </div>
    `,
})
export class HomeComponent implements OnInit {

    ngOnInit(): void {}

}
