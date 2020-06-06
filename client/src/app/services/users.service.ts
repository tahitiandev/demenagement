import { Injectable } from '@angular/core';
import { UsersModel } from '../models/users.model';
import { HttpClient } from '@angular/common/http';
import { UtilityService } from './utility.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http : HttpClient, private s : UtilityService) {  }

  users :  UsersModel[];

  getUsers(){
    return this.http.get<UsersModel[]>(this.s.url + "GetUsers.php");
  }

  getUsersById(id : number){
    return this.http.get<UsersModel[]>(this.s.url + "GetUsers.php?idusers=" + id);
  }

  postUsers(data : UsersModel){

    return this.http.post(this.s.url + "PostUsers.php", data);
  }

  deleteUsers(id : number){
    return this.http.delete(this.s.url + 'DeleteUsers.php?idusers=' + id);
  }

  putUsers(data : UsersModel){
    return this.http.put(this.s.url + 'UpdateUsers.php', data);
  }

  lookForById(id : number){

    this.getUsers().subscribe(s => this.users = s);

    const user = this.users.find(
      (s) => {
        return s.idusers === id;
      }
    )
    return user;
  }


}
