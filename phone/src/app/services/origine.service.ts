import { Injectable } from '@angular/core';
import { UtilityService } from './utility.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrigineService {

  constructor(private s : UtilityService,
              private http : HttpClient) { }

  get(){
    return this.http.get<any[]>(this.s.url + 'GetOrigine.php')
  }
}
