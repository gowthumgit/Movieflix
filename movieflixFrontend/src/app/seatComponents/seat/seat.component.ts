import { Component, OnInit, Input } from '@angular/core';
import { Seat } from "../model/Seat";

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.css']
})
export class SeatComponent implements OnInit {

  @Input() seat : Seat = new Seat();

  constructor() { }

  ngOnInit(): void {
  }

}
