import { Component, OnInit } from '@angular/core';
import { MockData } from '../../mock-data/mock-seats-data';
import { Seat } from 'src/app/models/seat';
import { SeatService } from 'src/app/services/seat.service';
import { SeatComponent } from '../seat/seat.component';
import { SharingService } from 'src/app/services/sharing.service';
import { Movie } from 'src/app/models/movie';
import { Theatre } from 'src/app/models/theatre';


@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {

  
  movie!:Movie;
  theatre!:Theatre;

  enteredValue=0;
  finalValue=0;

  seats : Seat[] = [];
  rows: String[] = ["A","B","C","D","E"];
   constructor(private seatService : SeatService, private sharingService:SharingService) { 
      this.seats = MockData.Seats;
     this.seats = seatService.getSeats();
     this.getMovie();
     this.getTheatre();
   }
 
   ngOnInit(): void {
   }

   changeColor(){
    this.movie=this.sharingService.getUser();
   }

   getMovie(){
    this.movie=this.sharingService.getMovie();
   }

   getTheatre(){
    this.theatre=this.sharingService.getTheatre();
   }
 
   updateValue(){
    this.finalValue=this.enteredValue;
   }
 
 }
 