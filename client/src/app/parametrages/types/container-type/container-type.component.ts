import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { TypesService } from 'src/app/services/types.service';
import { typesModel } from 'src/app/models/types.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-container-type',
  templateUrl: './container-type.component.html',
  styleUrls: ['./container-type.component.scss']
})
export class ContainerTypeComponent implements OnInit {

  constructor(private service : TypesService) { }

  type : Observable<typesModel[]>;

  ngOnInit() { 
    this.MettreAjourLaliste();
   }

  MettreAjourLaliste(){
    this.type= this.service.get();
  }

  mettreAjour(){
    /* setTimeout(() => {
      this.MettreAjourLaliste();
    }, 1000); */
  }



  } // class



