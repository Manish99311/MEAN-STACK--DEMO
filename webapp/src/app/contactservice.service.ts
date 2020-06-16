import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Contact} from './model';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactserviceService {

  constructor(private http: HttpClient) { }

  getContacts(): Observable<Contact[]>{
    return this.http.get<Contact[]>("http://localhost:3000/api/contacts");
  }

  addContact(newContact): any {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/contact', newContact ,{headers:headers});


  }
}
