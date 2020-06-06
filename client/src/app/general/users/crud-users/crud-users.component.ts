import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsersModel } from 'src/app/models/users.model';

@Component({
  selector: 'app-crud-users',
  templateUrl: './crud-users.component.html',
  styleUrls: ['./crud-users.component.scss']
})
export class CrudUsersComponent implements OnInit {

  formgroup : FormGroup;

   @Output() test = new EventEmitter();


   MettreAjourLaListe(){
    this.test.emit();
  }


  constructor(private service : UsersService,private formbuilder : FormBuilder) { }

  ngOnInit() {
    this.init();
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

onSubmit(){
  const post = this.formgroup.value;
  const data = new UsersModel(
    null,
    post['login'],
    post['password'],
    post['nom'],
    post['prenom'],
    post['telephone'],
    post['email'],
    post['adresse'],
    post['avatar']
  );

    this.service.postUsers(data).subscribe(
      res => {
        console.log("success");
        
        this.init();

      },
      err => {
        console.log("perso : echec de send " + err);
      }
    )
}

}
