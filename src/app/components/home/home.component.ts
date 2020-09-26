import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public image1: "assets/images/room1.png";
  public image2: "assets/images/room2.png";
  rooms: { id: number; title: string; description: string; rent: string; minBooking: string; maxBooking: string; }[];

  constructor() { }

  ngOnInit() {
    this.getRoomsList();
  }

  public getRoomsList(){
    this.rooms = [
     {id:1,title:"Room1",description:"Warm and welcoming with rustic charm and well-lit interiors, creating a soothing atmosphere for guests to relax.",rent:"1500",minBooking:"1 days",maxBooking:"5 days"},
     {id:2,title:"Room2",description:"Warm and welcoming with rustic charm and well-lit interiors, creating a soothing atmosphere for guests to relax.",rent:"1500",minBooking:"1 days",maxBooking:"5 days"},
     {id:3,title:"Room3",description:"Warm and welcoming with rustic charm and well-lit interiors, creating a soothing atmosphere for guests to relax.",rent:"1500",minBooking:"1 days",maxBooking:"5 days"},
     {id:1,title:"Room1",description:"Warm and welcoming with rustic charm and well-lit interiors, creating a soothing atmosphere for guests to relax.",rent:"1500",minBooking:"1 days",maxBooking:"5 days"},
     {id:2,title:"Room2",description:"Warm and welcoming with rustic charm and well-lit interiors, creating a soothing atmosphere for guests to relax.",rent:"1500",minBooking:"1 days",maxBooking:"5 days"},
     {id:3,title:"Room3",description:"Warm and welcoming with rustic charm and well-lit interiors, creating a soothing atmosphere for guests to relax.",rent:"1500",minBooking:"1 days",maxBooking:"5 days"},
     {id:1,title:"Room1",description:"Warm and welcoming with rustic charm and well-lit interiors, creating a soothing atmosphere for guests to relax.",rent:"1500",minBooking:"1 days",maxBooking:"5 days"},
     {id:2,title:"Room2",description:"Warm and welcoming with rustic charm and well-lit interiors, creating a soothing atmosphere for guests to relax.",rent:"1500",minBooking:"1 days",maxBooking:"5 days"},
     {id:3,title:"Room3",description:"Warm and welcoming with rustic charm and well-lit interiors, creating a soothing atmosphere for guests to relax.",rent:"1500",minBooking:"1 days",maxBooking:"5 days"},
     {id:1,title:"Room1",description:"Warm and welcoming with rustic charm and well-lit interiors, creating a soothing atmosphere for guests to relax.",rent:"1500",minBooking:"1 days",maxBooking:"5 days"},
     {id:2,title:"Room2",description:"Warm and welcoming with rustic charm and well-lit interiors, creating a soothing atmosphere for guests to relax.",rent:"1500",minBooking:"1 days",maxBooking:"5 days"},
     {id:3,title:"Room3",description:"Warm and welcoming with rustic charm and well-lit interiors, creating a soothing atmosphere for guests to relax.",rent:"1500",minBooking:"1 days",maxBooking:"5 days"}
    ];
  } 

}
