import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpHeaderInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let headerString = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJOYXZlZW4iLCJpYXQiOjE2MTU4NzYxNTAsImV4cCI6MTYxNTg3NzM1MH0.g6jtaZWR7g6C88syB4SSBYqa_FsSMnbcsWKXBLuZDDE";
    req = req.clone({
      setHeaders: {
        Authorization: headerString
      }
    })
    return next.handle(req);
  }
}
