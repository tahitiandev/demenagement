import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-origine',
  templateUrl: './origine.page.html',
  styleUrls: ['./origine.page.scss'],
})
export class OriginePage implements OnInit {

  constructor(private s : UtilityService) { }

  ngOnInit() {
  }
  goPop(){
    this.s.goPop()
  }
}
