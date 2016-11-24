import {Injectable } from '@angular/core';
import { Http, Response } from  '@angular/http';

import 'rxjs/add/operator/publishReplay';
import 'rxjs/Rx';

@Injectable()
export class DataService {
    items:any;
    constructor(private http:Http){ }
    public getData(){
           let url = './app/mocks/data.json';
           return this.http.get(url)
                           .toPromise()
                           .then(this.extractData)
                           .catch(this.handleError);


    }

    extractData = (res:Response)=>{
         this.items =  res.json();
         return this.items;
    }

    getDataById = (id)=> this.items
                            ? this.items.filter(v=> v.id == id)
                            : this.getData().then(data=>data.filter(v=> v.id == id));

    handleError = (err:any)=> console.log(err);

}