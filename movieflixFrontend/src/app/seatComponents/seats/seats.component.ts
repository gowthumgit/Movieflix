import { Component, OnInit } from '@angular/core';
import { MockData } from '../../mock-data/mock-seats-data';
import { Seat } from 'src/app/models/seat';
import { SeatService } from 'src/app/services/seat.service';
import { SeatComponent } from '../seat/seat.component';
import { SharingService } from 'src/app/services/sharing.service';
import { Movie } from 'src/app/models/movie';
import { Theatre } from 'src/app/models/theatre';
import { Time1 } from 'src/app/models/time';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';



@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {

  user!: User;

  movie!: Movie;
  theatre!: Theatre;
  time1!: Time1;
  seatVal!: Seat;
  enteredValue = 0;
  finalValue = 0;

  seats: Seat[] = [];
  rows: String[] = ["A", "B", "C", "D", "E"];

  toggle = true;
  status = 'Enable';




  constructor(private seatService: SeatService, private route: Router, private sharingService: SharingService) {
    this.seats = MockData.Seats;
    this.seats = seatService.getSeats();
    this.getMovie();
    this.getTheatre();
    this.getTheatreTime();
    this.getUser();
  }

  ngOnInit(): void {
  }
  enableDisableRule() {
    console.log("from seat component");
    this.toggle = !this.toggle;
    if (this.status == 'Disable') {
      this.finalValue = this.finalValue + 1;

      // console.log(this.userVal);



    }
    else {
      this.finalValue = this.finalValue + 1;
      console.log("from seat component");
      console.log(this.finalValue);

    }
    this.sharingService.setTotalSeats(this.finalValue);

    this.status = this.toggle ? 'Enable' : 'Disable';
  }


  changeColor() {
    this.movie = this.sharingService.getUser();
  }

  getMovie() {
    this.movie = this.sharingService.getMovie();
  }

  getTheatre() {
    this.theatre = this.sharingService.getTheatre();
    console.log(this.theatre);
  }
  getTheatreTime() {

    this.time1 = this.sharingService.getTheatreTime();
    console.log("from time deatisl")
    console.log(this.time1);
    console.log("from time deatisl")
  }

  updateValue() {
    this.finalValue = this.enteredValue;
  }

  logout() {
    if (window.confirm('Are You sure?')) {
      this.sharingService.clearUser();
      this.route.navigate(['/login']);
    }

  }
  getUser() {
    this.user = this.sharingService.getUser();
  }

  search(searchinp: String) {
    window.alert("Movie not found");
    }
payment(){
  if(this.finalValue==0)
  {
    alert("Please select a seat to make payment")
  } 
  else {
    this.route.navigate(['/home/payment']);
  }
}
}


