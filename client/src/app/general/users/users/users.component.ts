import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { UsersModel } from 'src/app/models/users.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users : UsersModel[];

  constructor(private service : UsersService) { }

  ngOnInit() {
    this.service.getUsers().subscribe(s => this.users = s);
  }


  deleteByUserId(id : number){
    this.service.deleteUsers(+id).subscribe();
    this.service.getUsers().subscribe(s => this.users = s);
  }


  hellotest(){
    setTimeout(() => {
      this.service.getUsers().subscribe(s => this.users = s);
    }, 2000);
    
  }

}
