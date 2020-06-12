import { Component, OnInit } from '@angular/core';
import { CartonsService } from '../services/cartons.service';
import { PopoverController, NavController } from '@ionic/angular';
import { CartonsAjouterPage } from '../cartons/cartons-ajouter/cartons-ajouter.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  cartons : any[]

  constructor(private service : CartonsService,
              private popoverctrl : PopoverController,
              private nav : NavController) {}

  ngOnInit(){
    this.service.get().subscribe(s => this.cartons = s)
  }

  async popover(){
    this.nav.navigateForward('/cartons-ajouter')
  }
}
