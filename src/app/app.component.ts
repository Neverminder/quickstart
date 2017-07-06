import {ApplicationRef, Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {Router} from "@angular/router";
declare let Notification: any;

@Component({
    selector: 'my-app',
    template: `
        <div>
            <router-outlet></router-outlet>
        </div>
    `,
})
export class AppComponent implements OnInit {

    constructor(private router: Router, private application: ApplicationRef) {}

    ngOnInit(): void {

        if (Notification.permission === 'granted') {
            this.showNotification();
        } else {
            Notification.requestPermission((permission: string) => {
                if (permission === 'granted') {
                    this.showNotification();
                }
            }).then();
        }

    }

    showNotification() {
        let options = {
            body: 'click me',
            renotify: true,
            tag: 'renotify',
            requireInteraction: true
        };
        let notification = new Notification('Go to test', options);
        notification.onclick = () => {
            window.focus();
            this.router.navigateByUrl('/test').then();
            notification.close();
        };

    }

}
