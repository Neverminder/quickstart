import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Component({
    selector: 'my-app',
    template: `
        <div>
            <h1>Home</h1>
            <button md-button routerLink="/test">Test</button>
        </div>
    `,
})
export class AppComponent implements OnInit {

    ngOnInit(): void {
        console.log('home');
        // TODO notification
    }

}
