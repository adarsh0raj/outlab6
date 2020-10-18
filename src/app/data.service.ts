import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from './data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private get_url: string = "https://cs251-outlab-6.herokuapp.com/initial_values/";
  private post_url: string = "https://cs251-outlab-6.herokuapp.com/add_new_feedback/";

  constructor(private http : HttpClient) { }

  getData(): Observable<Data> {
    return this.http.get<Data>(this.get_url);
  }

  postData(data: Data): Observable<Data> {
    return this.http.post<Data>(this.post_url, data);
  }
}
