import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TypesService } from 'src/app/services/types.service';
import { typesModel } from 'src/app/models/types.model';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-types',
  templateUrl: './types.page.html',
  styleUrls: ['./types.page.scss'],
})
export class TypesPage implements OnInit {

  constructor(private nav : NavController,
              private service : TypesService,
              private utility : UtilityService) { }

  types : typesModel[];

  ngOnInit() {
    this.service.get().subscribe(s => this.types = s)
  }

  goPop(){
    this.utility.goPop();
  }


}
