import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @ViewChild('sidenav', { static: true }) sidenav: any;
  public sidenavOpen:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
