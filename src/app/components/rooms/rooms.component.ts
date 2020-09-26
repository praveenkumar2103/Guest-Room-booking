import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  displayedColumns: string[] = ['title','description','minBooking','minBooking','rent','actions'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.getRoomsList();
  }

  public getRoomsList(){
    const countriesList = [
     {id:1,title:"Room1",description:"Creating a soothing atmosphere for guests to relax.",rent:"1500",minBooking:"1 days",maxBooking:"5 days"},
     {id:2,title:"Room2",description:"Creating a soothing atmosphere for guests to relax.",rent:"1500",minBooking:"1 days",maxBooking:"5 days"},
     {id:3,title:"Room3",description:"Creating a soothing atmosphere for guests to relax.",rent:"1500",minBooking:"1 days",maxBooking:"5 days"}
    ];
    this.dataSource = new MatTableDataSource<any>(countriesList);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  deleteRoom(){
    var r = confirm("Do you want to delete ?");
    if (r == true) {
      alert("Deleted Successfully!!!");
    }
  }
}
