import { Component, OnInit } from '@angular/core';
import { MockData } from '../mock-data/mock-seats-data';
import { Seat } from '../model/Seat';
import { SeatService } from '../seat.service';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {

  seats : Seat[] = [];
  rows: String[] = ["A","B","C","D","E"];
   constructor(private seatService : SeatService) { 
      this.seats = MockData.Seats;
      this.seats = seatService.getSeats();
   }
 
   ngOnInit(): void {
   }

   changeColor(){
    
   }
 
 
 }
