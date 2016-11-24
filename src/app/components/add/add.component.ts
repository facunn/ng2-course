import { Component, Input } from '@angular/core';

@Component({
  selector: 'add-component',
  templateUrl: './add.component.html'
})
export class AddComponent {
  @Input() name:string;
}
  