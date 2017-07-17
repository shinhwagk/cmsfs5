import { Component } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  group = ['Test', 'Dev', 'Yali', 'Lt']

  currentServer: string;

  setCurrentServer(name: string) {
    this.currentServer = name
  }

  closeWindow() {
    alert('close windows')
  }

  constructor(private http: Http) {

  }


}
