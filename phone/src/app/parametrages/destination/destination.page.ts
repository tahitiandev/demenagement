import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.page.html',
  styleUrls: ['./destination.page.scss'],
})
export class DestinationPage implements OnInit {

  constructor(private s : UtilityService) { }

  ngOnInit() {
  }

  goPop(){
    this.s.goPop()
  }

}
