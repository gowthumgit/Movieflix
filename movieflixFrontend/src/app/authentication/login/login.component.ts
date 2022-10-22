import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router'
import { User } from 'src/app/models/user';
import { Movie } from 'src/app/models/movie';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  loginForm!: FormGroup;
  userName!: FormControl;
  userPassword!: FormControl;
  
  constructor(private route: Router, private loginservice: LoginService) {
    this.getAllUsers();
  }
  users:any=[];
  userVal!:Movie

  onlogin() {
    let check = 0;
    

    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].userId == this.userName && this.users[i].userPassword == this.userPassword) {

        check = 1;
        this.userVal = this.users[i]

        this.loginservice.setUser(this.userVal);
        

        this.route.navigate(['/home/chennai']);


        
       break

      }

    }

    if (check == 0) {
      console.log(this.userName);
      alert("Enter valid username and password")

    }

  }

  ngOnInit(): void {
    this.userName = new FormControl('', [Validators.required]);
    this.userPassword = new FormControl('', [Validators.required]);


    this.loginForm = new FormGroup({
      'userName': this.userName,
      'userPassword': this.userPassword
    })
  }

  getAllUsers() {
    this.loginservice.getUsers().subscribe((usedata) => {
      this.users = usedata;
      
    })
  }

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

 

}