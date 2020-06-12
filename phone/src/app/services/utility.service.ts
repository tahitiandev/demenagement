import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private nav : NavController) { }

    //readonly url = "http://127.0.0.1/dem/server/api/";
    readonly url = "https://tahiti-relocation.000webhostapp.com/server/api/";

    goPop(){
      this.nav.navigateBack("/tabs/tab3")
    }

}
