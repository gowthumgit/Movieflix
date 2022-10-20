import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieServices} from '../../services/movie-services.service';
import { Movie} from '../../models/movie'
@Component({
  selector: 'app-admin-edit-chennai',
  templateUrl: './admin-edit-chennai.component.html',
  styleUrls: ['./admin-edit-chennai.component.css']
})
export class AdminEditChennaiComponent implements OnInit {

  formSubmitted = false;
  editMovForm!: FormGroup;
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

    this.editMovForm = new FormGroup({
      'name' : this.name,
      'language' : this.language,
      'genre' : this.genre,
      'image_url' : this.image_url
    });

    this.updateMovie();
    let id = this.acRoute.snapshot.paramMap.get('movid');
    
    this.getMovie(id);
    console.log(id);
    console.log("print statement");

  }
  updateMovie() {
    
  }
  getMovie(id: any){
    this.movService.getMovieById(id).subscribe((data) =>{
      this.editMovForm.setValue({
        name : data['name'],
        language : data['language'],
        genre : data['genre'],
        image_url : data['image_url']
      });
    });
  }

  editMovie(){
    console.log("edit Movie...");
    this.formSubmitted = true;
    if(window.confirm("are you sure???")){
      let movid = this.acRoute.snapshot.paramMap.get('movid');
      this.movService.updateMovie(movid,this.editMovForm.value).subscribe({
        complete :()=>{
          this.router.navigateByUrl('/movie');
          console.log('Movie updated successfully')
        },
        error : (e) =>{
          console.log(e)
        }
      });
    }
}




}
