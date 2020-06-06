import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute } from '@angular/router';
import { UsersModel } from 'src/app/models/users.model';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-update-users',
  templateUrl: './update-users.component.html',
  styleUrls: ['./update-users.component.scss']
})
export class UpdateUsersComponent implements OnInit {

  constructor(private service : UsersService,
              private router : ActivatedRoute,
              private formbuilder : FormBuilder) { }

  users : UsersModel[];
  idusers;

  ngOnInit() {

    const id = this.router.snapshot.params['id'];
    this.idusers = id;
    this.service.getUsersById(+id).subscribe(s => this.users = s);
    this.init()
  }

  lookForById(){
    const user = this.users.find(
      (s) => {
        return s.idusers === this.idusers;
      }
    )
    return user;
  }


  getLogin(){
    return  this.lookForById().login;
  }

  getPassword(){
    return this.lookForById().password;
  }

  getPrenom(){
    return this.lookForById().prenom;
  }

  getNom(){
    return this.lookForById().nom;
  }

  getTelephone(){
    return this.lookForById().telephone;
  }

  getEmail(){
    return this.lookForById().email;
  }

  getAdresse(){
    return this.lookForById().adresse;
  }
  getAvatar(){
    return this.lookForById().avatar;
  }

  init(){

    this.formgroup = this.formbuilder.group(
      {
        login : '',
        password : '',
        nom : '',
        prenom : '',
        telephone : '',
        email : '',
        adresse : '',
        avatar : ''
      }
    )
  }


  formgroup : FormGroup;

  onSubmit(){

    const post = this.formgroup.value;
    const result = new UsersModel(
      this.idusers,
      post['login'],
      post['password'],
      post['nom'],
      post['prenom'],
      post['telephone'],
      post['email'],
      post['adresse'],
      post['avatar']
    )

    this.service.putUsers(result).subscribe(
      (res) => {
        console.log(res)
      },
      (err) => {
        console.log(err)
      }
    )
  }



}
