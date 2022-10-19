import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieServices} from '../../services/movie-services.service';
import { Movie} from '../../models/movie'

@Component({
  selector: 'app-admin-add-chennai',
  templateUrl: './admin-add-chennai.component.html',
  styleUrls: ['./admin-add-chennai.component.css']
})
export class AdminAddChennaiComponent implements OnInit {

  formSubmitted = false;
  addMovForm!: FormGroup;
  movieData : Movie[] = [];
  movieId!:FormControl;
  name!: FormControl;
  genre!: FormControl;
  image_url!: FormControl;
  language!: FormControl;
  duration!:FormControl;
  rating!:FormControl;
  actors!:FormControl;
  audi_ids!:FormControl;
  
 
  constructor(
    private acRoute:ActivatedRoute,
    private movService:MovieServices,
    private router:Router
  ) { 
   
  }

  ngOnInit(): void {
    this.movieId = new FormControl();
    this.name = new FormControl();
    this.genre = new FormControl();
    this.image_url = new FormControl();
    this.language = new FormControl();
    this.duration = new FormControl();
    this.rating = new FormControl();
    this.actors = new FormControl();
    this.audi_ids = new FormControl();

    this.addMovForm = new FormGroup({
      'movieId':this.movieId,
      'name' : this.name,
      'genre' : this.genre,
      'image_url' : this.image_url,
      'language' : this.language,
      'duration':this.duration,
      'rating':this.rating,
      'actors':this.actors,
      'audi_ids':this.audi_ids
    });
  }
  addMovie(){
    console.log("add Movie...");
    this.formSubmitted = true;
    if(window.confirm("are you sure???")){
      let movid = this.acRoute.snapshot.paramMap.get('movid');
      this.movService.addMovie(this.addMovForm.value).subscribe({
        complete :()=>{
          this.router.navigateByUrl('/movie');
          console.log('Movie added successfully')
        },
        error : (e :any) =>{
          console.log(e)
        }
      }); 
    }
}




  }
