import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  public generateToken(request) {
    let username = request.username;
    let password = request.password;
    let basicAuthHeader = 'Basic' + window.btoa(username + ':' + password);
    return this.httpClient.get("http://localhost:8080/authenticate", {
      headers: new HttpHeaders().set('Authorization', basicAuthHeader)
    });
  }

  constructor(private httpClient: HttpClient) { }
}
