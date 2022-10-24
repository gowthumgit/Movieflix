import { Component, OnInit,Input } from '@angular/core';
import { TheatreService } from 'src/app/services/theatre.service';
import {  MovieServices } from 'src/app/services/movie-services.service';
import { Theatre } from 'src/app/models/theatre';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { SharingService } from 'src/app/services/sharing.service';




@Component({
  selector: 'app-theatre-comp',
  templateUrl: './theatre-comp.component.html',
  styleUrls: ['./theatre-comp.component.css']
})

export class TheatreCompComponent implements OnInit {
@Input() 


  movie!:Movie;
  movies: Movie[]=[];
  constructor(private theatService:TheatreService, private sharingService:SharingService, private movService:MovieServices, private acRoute:ActivatedRoute,private router:Router) { 
  this.getAllTheatres();
    this.getMovie()
    
  }

  // movies:any=[];

theatres: any=[];
theatreVal!:Theatre;
Movie:any=[];



  ngOnInit(): void {
    
  

  }


getAllTheatres(){
  this.theatService.getTheatres().subscribe((thdata) =>{
    this.theatres = thdata;
  })
}

removeTheatre(){
  
}



getMovie()
{
  this.movie=this.sharingService.getMovie();
}



onTheatreSelect(_theatreName:String){
  
  for (let i = 0; i < this.movies.length; i++) {
    if (this.theatres[i].theatreName == _theatreName) {

      this.theatreVal = this.theatres[i];
      this.sharingService.setTheatre(this.theatreVal);
    }
  }
  
}

}



