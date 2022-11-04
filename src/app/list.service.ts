import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  baseUrl = environment.baseUrl;

  constructor(private http:HttpClient) {}


  getAll():Observable<any>{
    return this.http.get(`${this.baseUrl}/lisitng`);
  }

  // getById(id):Observable<any>{
  //   return this.http.get(`${this.baseUrl}/clients/${id}`);
  // }

  post(value: Partial<{ items: string | null; }>):Observable<any>{
    return this.http.post(`${this.baseUrl}/listing`,value);
  }

  delete(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/lisitng/${id}`);
  }

  // put(id,value):Observable<any>{
  //   return this.http.put(`${this.baseUrl}/clients/${id}`,value);
  // }


  }
