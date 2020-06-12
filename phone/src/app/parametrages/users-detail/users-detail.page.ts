import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { timeout } from 'q';
import { UsersModel } from 'src/app/models/users.model';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.page.html',
  styleUrls: ['./users-detail.page.scss'],
})
export class UsersDetailPage implements OnInit {

  constructor(private para :  ActivatedRoute,
              private service : UsersService,
              private nav : NavController) { }

  users : UsersModel[]

  nom
  login
  password
  prenom
  adresse
  email
  telephone
  avatar

  goPop(){
    this.nav.navigateBack('users')
  }


  ngOnInit() {

    const id = this.para.snapshot.params['idusers'];

    this.service.get().subscribe(s => this.users = s)

    setTimeout(() => {
      const data = this.users.find(
        (s) => {
          return s.idusers === id
        }
      )
      this.nom = data.nom;
      this.login = data.login;
      this.password = data.password;
      this.prenom = data.prenom;
      this.adresse = data.adresse;
      this.email = data.email;
      this.telephone = data.telephone;
      this.avatar = data.avatar;
    }, 1000);
    
  }

}
