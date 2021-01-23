import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web-app';

  cities = [
    {
      id: 'Bangalore',
      value: 'Bangalore'
    },
    {
      id: 'Mumbai',
      value: 'Mumbai'
    },
    {
      id: 'Udupi',
      value:'Udupi'
    },
    {
      id: 'Kolkata',
      value: 'Kolkata'
    },
    {
      id: 'Delhi',
      value: 'Delhi'
    }
  ]

 // myControl = new FormControl();
  options = ['one','two','three']

  displayedColumns = ['Favorites','IFSC','Bank Name','ID','Branch','Address','District','State']
}
