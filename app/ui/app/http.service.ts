import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Server } from './server'

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  getServersByGroupName(name: string): Promise<Server[]> {
    return this.http.get('`')
      .toPromise()
      .then(response => response.json().data as Server[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
