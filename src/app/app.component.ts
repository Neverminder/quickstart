import {Component, OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {CorporateEmployee} from './model/corporate-employee';

@Component({
  selector: 'my-app',
  templateUrl: '/app/html/hello.html',
})
export class AppComponent implements OnInit{

  name = 'Angular';

  offset: number;

  pageSize: number;

  total: number;

  rows: any[];

  columns = [{name: 'Name'}, {name: 'Gender'}, {name: 'Company'}];

  constructor(private http: Http) {}

  ngOnInit(): void {
    this.loadPage({offset: 0, pageSize: 10});
  }

  loadPage(event: any) {
    this.pageSize = event.pageSize;
    this.offset = event.offset;
    this.http.get('/app/data/data.json').toPromise().then((response: Response) => {
      let data =  <CorporateEmployee[]> response.json();
      this.total = data.length;
      this.rows = data.slice(this.offset * this.pageSize, this.offset * this.pageSize + this.pageSize);
    });
  }

}
