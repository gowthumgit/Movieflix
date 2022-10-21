import { Component, OnInit,Input } from '@angular/core';
import { TheatreService } from 'src/app/services/theatre.service';
import {  MovieServices } from 'src/app/services/movie-services.service';
import { Theatre } from 'src/app/models/theatre';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/models/movie';




@Component({
  selector: 'app-theatre-comp',
  templateUrl: './theatre-comp.component.html',
  styleUrls: ['./theatre-comp.component.css']
})

export class TheatreCompComponent implements OnInit {
@Input() 


  movie!:Movie;
  movies: Movie[]=[];
  constructor(private theatService:TheatreService, private movService:MovieServices, private acRoute:ActivatedRoute,private router:Router) { 
  this.getAllTheatres();
    this.getMovie()
    
  }

  // movies:any=[];

Theatre: any=[];
Movie:any=[];



  ngOnInit(): void {
    
  

  }


getAllTheatres(){
  this.theatService.getTheatres().subscribe((thdata) =>{
    this.Theatre = thdata;
  })
}

removeTheatre(){
  
}



getMovie()
{
  this.movie=this.movService.movie;
}
}

