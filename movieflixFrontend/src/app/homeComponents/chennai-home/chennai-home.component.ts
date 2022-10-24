import { Component, OnInit,Input } from '@angular/core';
import { MovieServices} from '../../services/movie-services.service';
import { Movie } from 'src/app/models/movie';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router'

import { SharingService } from 'src/app/services/sharing.service';


@Component({
  selector: 'app-chennai-home',
  templateUrl: './chennai-home.component.html',
  styleUrls: ['./chennai-home.component.css']
})
export class ChennaiHomeComponent implements OnInit {
  @Input() moviename=[];
  
  user!:User;
  
  
  Moviename=Movie;


  constructor(private movService:MovieServices,private sharingService:SharingService,private route: Router) { 
    this.getAllMovies();
    this.getUser();   
  }
  movies:any=[];
  movieVal!:Movie;


  ngOnInit(): void {
  }
  getAllMovies(){
    this.movService.getMovies().subscribe((movdata)=>{
      this.movies=movdata;
      
    })
  }

  removemovie(movie :any,index:any){
    if(window.confirm('Are You sure?')){
      this.movService.deleteMovie(movie._id).subscribe((data)=>{
        this.movies.splice(index,1);
      })
    }
  }

  passMovie(movie : Movie){
   this.movService.setMovie(movie);
  }

logout(){
  if(window.confirm('Are You sure?')){
  this.sharingService.clearUser();
  this.route.navigate(['/login']);
  }

}
  getUser(){
    
       
    this.user=this.sharingService.getUser();
    
    
  }
  
  search(searchinp:String){
    for (let i = 0; i < this.movies.length; i++) {
      if (this.movies[i].name == searchinp) {
        window.alert("Movie not found");



  }
}
}


onMovieSelect(_movieName:String){
  
  for (let i = 0; i < this.movies.length; i++) {
    if (this.movies[i].movieName == _movieName) {

      this.movieVal = this.movies[i];
      this.sharingService.setMovie(this.movieVal);
    }
  }
  
}
}