import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  formSubmitted = false;
  addUseForm!: FormGroup;
  userData : User[] = [];
  userId!:FormControl;
  userEmail!: FormControl;
  userLocation!: FormControl;
  userLanguage!: FormControl;
  userBalance!: FormControl;
  userPassword!:FormControl;
  
  type : string ="password";
  isText : boolean = false;
  eyeIcon : string ="fa-eye-slash";

  constructor(
    private acRoute:ActivatedRoute,private router:Router,private useService:LoginService) { }

  ngOnInit(): void {
    this.userId = new FormControl();
    this.userEmail = new FormControl();
    this.userLocation = new FormControl();
    this.userLanguage = new FormControl();
    this.userBalance = new FormControl();
    this.userPassword= new FormControl();
 
    this.addUseForm = new FormGroup({
      'userId':this.userId,
      'userEmail' : this.userEmail,
      'userLocation' : this.userLocation,
      'userLanguage' : this.userLanguage,
      'userBalance' : this.userBalance,
      'userPassword':this.userPassword,
    });
  }


  addUser(){
    console.log("add User...");
    this.formSubmitted = true;
    if(window.confirm("are you sure???")){
      let useid = this.acRoute.snapshot.paramMap.get('useid');
      this.useService.addUser(this.addUseForm.value).subscribe({
        complete :()=>{
          this.router.navigateByUrl('/user');
          console.log('User added successfully')
        },
        error : (e :any) =>{
          console.log(e)
        }
      }); 
    }
}
  
  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon ="fa-eye" : this.eyeIcon ="fa-eye-slash";
    this.isText ? this.type ="text" : this.type = "password";
  }
}