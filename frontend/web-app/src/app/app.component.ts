import { Global } from './global';
import { ApiService } from  './api.service';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {DialogboxComponent} from './dialogbox/dialogbox.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'web-app';
  branches!: MatTableDataSource<any[]>;


  constructor(private  apiService:  ApiService, private global: Global, public dialog: MatDialog) {
   }

  ngOnInit() {
    this.getBranches();
  } 
  getBranches(){    
    this.apiService.getBranches().subscribe((data) => {        
      this.branches  = new MatTableDataSource(data); 
      this.branches.paginator = this.paginator;      
      console.log(data);    });
    }

    @ViewChild(MatPaginator) paginator!: MatPaginator;
  
    ngAfterViewInit() {
      // this.branches.paginator = this.paginator;
    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.branches.filter = filterValue.trim().toLowerCase();
    }

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

  displayedColumns = ['Favorites','IFSC','Bank Name','ID','Branch','Address','District','State'];
  
  
  changeClient(data: Event){
    this.global.globalVariable = `?q=${data}`;
    this.getBranches();
  }

  openDialog() {
    this.dialog.open(DialogboxComponent);
  }

}
