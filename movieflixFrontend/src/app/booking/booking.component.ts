import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { SharingService } from '../services/sharing.service';
import { MovieServices } from '../services/movie-services.service';
import { Movie } from '../models/movie';
import { TheatreService } from '../services/theatre.service';
import { Theatre } from '../models/theatre';
import { Time1 } from '../models/time';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  user!:User;
  Moviename=Movie;
  movieDetails!:Movie;
  Movie:any=[];
  totalSeats:any;
  theatreDetails!:Theatre;
  time1!:Time1;
  loc!: String;


  myAngularQrCode:any;
  constructor(private sharingService:SharingService,private route:Router,private movService:MovieServices,private theatService:TheatreService) { 
    this.getUser();
    this.getMovie();
    this.getTotalSeats();
    this.getTheatre();
    this.getTheatreTime();
    this.getLocation();
   

    this.myAngularQrCode='Your Qr Code';
  }

  ngOnInit(): void {
  }
  getMovie(){
    this.movieDetails=this.sharingService.getMovie();
  }

  getUser(){
    this.user=this.sharingService.getUser();

  }

  getTotalSeats(){
    this.totalSeats=this.sharingService.getTotalSeats();
  }

  getTheatre(){
    this.theatreDetails=this.sharingService.getTheatre();
  }
  getTheatreTime() {

    this.time1 = this.sharingService.getTheatreTime();
    console.log("from time deatisl")
    console.log(this.time1);
    console.log("from time deatisl")
  }

 
  getLocation(){
    this.loc=this.sharingService.getLocation();
    console.log("From getlocation");
          console.log(this.loc);
  }
  search(moviename:String){

  }
  logout(){
    if(window.confirm('Are You sure?')){
    this.sharingService.clearUser();
    this.route.navigate(['/login']);
    }
  
  }

}
