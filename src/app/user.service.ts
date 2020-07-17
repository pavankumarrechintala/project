import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl :string="https://api.github.com/users"


  constructor(private ht:HttpClient) { 

  }

  getUsers():  Observable<any>
  {

  return this.ht.get(this.userUrl,{responseType:'json'})
  }

  getRepos(username):  Observable<any>
  {

  return this.ht.get(`https://api.github.com/users/${username}/repos`,{responseType:'json'})
  }
}
