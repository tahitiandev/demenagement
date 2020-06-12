import { Injectable } from '@angular/core';
import { UtilityService } from './utility.service';
import { HttpClient } from '@angular/common/http';
import { cartonsModel } from '../models/cartons.model';

@Injectable({
  providedIn: 'root'
})
export class CartonsService {

  constructor(private s : UtilityService,
              private http : HttpClient) { }

  get(){
    return this.http.get<cartonsModel[]>(this.s.url + 'GetCartons.php');
  }

  post(data : cartonsModel){
    return this.http.post(this.s.url + 'PostCartons.php', data);
  }


}
