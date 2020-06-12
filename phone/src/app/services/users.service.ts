import { Injectable } from '@angular/core';
import { UtilityService } from './utility.service';
import { HttpClient } from '@angular/common/http';
import { UsersModel } from '../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private s : UtilityService,
              private http : HttpClient) { }

  get(){
    return this.http.get<any[]>(this.s.url + 'GetUsers.php')
  }


}