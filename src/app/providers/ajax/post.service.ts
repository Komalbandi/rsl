import { Injectable } from '@angular/core';
import {HttpClient,HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  post<T>(endPoint:string,bodyData:Object):Observable<T> {
    return this.http.post<T>(endPoint,bodyData);
  }
}
