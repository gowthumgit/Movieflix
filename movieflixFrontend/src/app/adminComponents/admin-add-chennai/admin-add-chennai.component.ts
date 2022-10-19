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
  name!: FormControl;
  language!: FormControl;
  genre!: FormControl;
  image_url!: FormControl;
  constructor(
    private acRoute:ActivatedRoute,
    private movService:MovieServices,
    private router:Router
  ) { 
   
  }

  ngOnInit(): void {
    this.name = new FormControl();
    this.language = new FormControl();
    this.genre = new FormControl();
    this.image_url = new FormControl();

    this.addMovForm = new FormGroup({
      'name' : this.name,
      'language' : this.language,
      'genre' : this.genre,
      'image_url' : this.image_url
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
