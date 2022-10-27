import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router'
import { SharingService } from 'src/app/services/sharing.service';
import { MovieServices} from '../services/movie-services.service';
import { Movie } from 'src/app/models/movie';



@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  user!:User;
  Moviename=Movie;
  movieDetails!:Movie;
  Movie:any=[];
  tempValue!:Number;
  temp1Value!:Number;
  loc!: String;


  constructor(private sharingService:SharingService,private route: Router,private movService:MovieServices) {
    this.getUser();
    this.getMovie();
    this.getTotalSeats();
    this.getLocation();
   
  
   }

  ngOnInit(): void {
  }
  getMovie()
{
  this.movieDetails=this.sharingService.getMovie();
}

  getUser(){
    
       
    this.user=this.sharingService.getUser();
    console.log("Checking Values ")
    console.log(this.user._id)
    
    
  }
  logout(){
    if(window.confirm('Are You sure?')){
    this.sharingService.clearUser();
    this.route.navigate(['/login']);
    }
  
  }
  totalSeats:any;
  getTotalSeats(){
    this.totalSeats = this.sharingService.getTotalSeats();
  }
  paymentFunc(){
    console.log("from payment");
if (this.user.userBalance>= this.totalSeats*240)
{
  console.log("from payment if cond");
  
  //this.tempValue =this.user.userBalance ;
  //this.temp1Value = (this.totalSeats*240);

 //this.user.userBalance -= this.totalSeats*240;
  alert("Payment successfull ")

  let rout='/home/booking';
  console.log(rout);
  this.route.navigate([rout]);
 
}
else {
  alert("Payment Unsuccessfull due to insufficient Funds ");

}

  }
  getLocation(){
    this.loc=this.sharingService.getLocation();
    console.log("From getlocation");
          console.log(this.loc);
  }


}
