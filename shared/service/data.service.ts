import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private itemsUrl = 'api/items';  // URL to web api

  constructor(private http: HttpClient) { }

  getItems(): Observable<any[]> {
    return this.http.get<any[]>(this.itemsUrl);
  }
  postItems(item:any):Observable<any>{
    return this.http.post<any[]>(this.itemsUrl,item)
  }
  getItemById(id:any): Observable<any> {
    return this.http.get<any[]>(this.itemsUrl + "/" + id);
  }
  updateById(id:any,user:any): Observable<any> {
    return this.http.put<any[]>(this.itemsUrl + "/" + id,user);
  }
}
