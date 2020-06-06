import { Component, OnInit, Input } from '@angular/core';
import { TypesService } from 'src/app/services/types.service';

@Component({
  selector: 'app-view-type',
  templateUrl: './view-type.component.html',
  styleUrls: ['./view-type.component.scss']
})
export class ViewTypeComponent implements OnInit {

  constructor(private service : TypesService) { }

  @Input() types;
  informerUser = false;

  ngOnInit() {
  }

  mettreAJourLaListe(){
    this.service.get().subscribe(s => this.types = s)
  }

  deleteType(id : number){
    this.service.delete(id).subscribe(
      (res) => {
        console.log('Le type a bien été supprimé');
        this.informerUser = true;
      },
      (err) => {
        console.log('erreur : ' + err)
        this.mettreAJourLaListe();
        this.informerUser = true;
      },
      () => {
        this.mettreAJourLaListe();
        this.informerUser = true;
      }
    )
  }

  closeAlerte(){
    this.informerUser = false;
  }


} // class
