import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';
import { UsersService } from 'src/app/services/users.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  constructor(private s : UtilityService,
              private service : UsersService,
              private nav : NavController) { }

  users : any[];

  ngOnInit() {
    this.service.get().subscribe(s => this.users = s)
  }

  goPop(){
    this.s.goPop()
  }

}
