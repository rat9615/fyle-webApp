import { Component } from '@angular/core';

@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.css']
})
export class DialogboxComponent {
  favoriteBanks: Array<any> = [];
  constructor() { }

  banks() {
    return JSON.parse(localStorage.getItem('banks')|| '{}');
  }
  
}
