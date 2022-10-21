import { Component, Input, OnInit } from '@angular/core';
import { MockData } from '../../mock-data/mock-seats-data';
import { Seat } from 'src/app/models/seat';
import { SeatService } from 'src/app/services/seat.service';
import { SeatComponent } from '../seat/seat.component';

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
 