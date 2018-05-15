import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';

/*
  Generated class for the RemoteServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RemoteServiceProvider {

  getApiUrl: string = "https://jsonplaceholder.typicode.com/posts";

  constructor(public http: Http) {
    console.log('Hello RemoteServiceProvider Provider');
  }

  getPosts(url,token) {

    let testURL = url;
    let authHeader = 'Basic '+token;

    let headersObj = new Headers();
    headersObj.append('Authorization', authHeader);

    console.log(testURL);
    console.log(authHeader);

    return this.http.get(testURL, { headers: headersObj })
      .map((res: Response) => res.json());

    }

}
