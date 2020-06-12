import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { TypesService } from 'src/app/services/types.service';
import { typesModel } from 'src/app/models/types.model';
import { OrigineService } from 'src/app/services/origine.service';
import { DestinationService } from 'src/app/services/destination.service';
import { cartonsModel } from 'src/app/models/cartons.model';
import { CartonsService } from 'src/app/services/cartons.service';

@Component({
  selector: 'app-cartons-ajouter',
  templateUrl: './cartons-ajouter.page.html',
  styleUrls: ['./cartons-ajouter.page.scss'],
})
export class CartonsAjouterPage implements OnInit {

  constructor(private nav : NavController,
              private formbuilder : FormBuilder,
              private typeservice : TypesService,
              private origineservice : OrigineService,
              private destinationservice : DestinationService,
              private cartonservice : CartonsService) { }

  types : typesModel[];
  origines : any[];
  destinations : any[];

  ngOnInit() {
    this.typeservice.get().subscribe(s => this.types = s);
    this.origineservice.get().subscribe(s => this.origines = s);
    this.destinationservice.get().subscribe(s => this.destinations = s);
  }

  goPop(){
    this.nav.navigateBack('/')
  }

  formgroup : FormGroup;

  onSubmit(result : NgForm){

    const post = result.value;
    const data = new cartonsModel(
      null,
      post['numero'],
      post['type'],
      post['contenu'],
      post['origine'],
      post['destination'],
      null
    );
    
    this.cartonservice.post(data).subscribe(
      (res) => {
        console.log('success')
      },
      (error) => {
        console.log('error')
      }
    )
  }


}
