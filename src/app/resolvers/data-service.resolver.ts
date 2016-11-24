import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot} from '@angular/router';
import { DataService } from '../services/data.service';

@Injectable()
export class DataServiceResolver implements Resolve<any>{
    
     constructor(private DataService:DataService){}

     resolve(route:ActivatedRouteSnapshot){
        return this.DataService.getDataById(route.params['id']);
     }
}