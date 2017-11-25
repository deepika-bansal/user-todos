import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class UserService {

  private baseURL = "http://jsonplaceholder.typicode.com/users";

  constructor(private http: Http) {
    console.log("User Service Created.....");
  }

  getAllUsers(): Observable<Response> {
    return this.http.get(this.baseURL)
      .map(response => response.json())
      .catch(error => error.json());
  }

  getUser(id: number): Observable<Response> {
    return this.http.get(this.baseURL + "/" + id)
      .map(response => response.json())
      .catch(error => error.json());
  }

}
