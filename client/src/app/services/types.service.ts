import { Injectable } from '@angular/core';
import { UtilityService } from './utility.service';
import { HttpClient } from '@angular/common/http';
import { typesModel } from '../models/types.model';

@Injectable({
  providedIn: 'root'
})
export class TypesService {

  constructor(private s : UtilityService,
              private http : HttpClient) { }

  get(){
    return this.http.get<typesModel[]>(this.s.url + "GetTypes.php");
  }

  post(data : typesModel){
    return this.http.post(this.s.url + 'PostTypes.php', data);
  }

  delete(id : number){
    return this.http.delete(this.s.url + 'DeleteTypes.php?idtype=' + id)
  }

}
