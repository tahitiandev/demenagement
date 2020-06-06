import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TypesService } from 'src/app/services/types.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { typesModel } from 'src/app/models/types.model';

@Component({
  selector: 'app-cru-type',
  templateUrl: './cru-type.component.html',
  styleUrls: ['./cru-type.component.scss']
})
export class CruTypeComponent implements OnInit {

  constructor(private service : TypesService,
              private formbuilder : FormBuilder) { }

  formgroup : FormGroup

  ngOnInit() {
    this.init();
  }

  init(){
    this.formgroup = this.formbuilder.group({
      nomtype : ''
    })
  }

  postType(){
    const post = this.formgroup.value;
    const data = new typesModel(
      null,
      post['nomtype']
    )

    this.service.post(data).subscribe(
      (res) => {
        console.log('success');
        this.init();
      },
      (err) => {
        console.log('erreur : ' + err)
        this.init();
      },
      () => {
        this.init();
      }
    )

  }

  @Output() updateListe = new EventEmitter();

  MettreAJour(){
    this.updateListe.emit();
  }


}
