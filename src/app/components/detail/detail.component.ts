import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'detail-component',
  templateUrl: './detail.component.html'
 // styleUrls: ['./detail.component.css']
})
export class DetailComponent {
    data:any;

    constructor(private router:ActivatedRoute){
            this.data = this.router.snapshot.data['data'][0];
    }

}
  