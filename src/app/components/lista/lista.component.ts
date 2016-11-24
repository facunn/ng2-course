import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router} from '@angular/router';


@Component({
  selector: 'lista-component',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  data:any;
  constructor(public DataService:DataService, private router:Router ){
        this.DataService.getData().then((res)=>{
             this.data = res;
        })
  }

  public gotoDetail(item){
      let url = ['/detail', item.id];
      this.router.navigate(url);
  }

}
  