import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  LoginURL = 'http://localhost:8000/login/';
  registerURL = 'http://localhost:8000/userViewSet/';
  baseURL = 'http://localhost:8000/todofeed/';
 /*  headers = new HttpHeaders({
    Authorization: `Token ${this.token}`
  }); */

  constructor(private http:HttpClient, private cookieService:CookieService) {}

  private todofeed = ['book tickets', 'finish course on full stack'];

  getToDoFeed(){
    return this.http.get(this.baseURL, {headers: this.getAuthHeaders()});
  }

  delToDoFeed(item){
    const body = {'id': item.id}
    return this.http.delete(`${this.baseURL}${item.id}`,  {headers: this.getAuthHeaders()});
  }

  updateToDoFeed(item){
    item.status = !item.status
    const body = {'status':item.status}
    return this.http.put(`${this.baseURL}${item.id}/`,item,  {headers: this.getAuthHeaders()})
  }
  AddToDo(item){
    const body = {
      'item': item.item,
      'status': item.status
    }
  return this.http.post(this.baseURL, body, {headers: this.getAuthHeaders()});
  }

  userLogin(user){
    const body = {
      'username': user.username,
      'password': user.password
    }
    return this.http.post(this.LoginURL, body);
  }

  userRegister(user){
    const body = {
      'username': user.username,
      'password': user.password
    }
    return this.http.post(this.registerURL, body);
  }

  getAuthHeaders() {
    console.log('inside getAuthHeaders')
    const token = this.cookieService.get('user-token');
    console.log('token ----------------->>>>>>>', token)
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`
    });
  }
}
