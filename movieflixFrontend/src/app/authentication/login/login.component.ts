import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  type : string ="password";
  isText : boolean = false;
  eyeIcon : string ="fa-eye-slash";
  loginForm! : FormGroup;
  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username:['',Validators.required],
      pasword:['',Validators.required]
    })
  }
  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon ="fa-eye" : this.eyeIcon ="fa-eye-slash";
    this.isText ? this.type ="text" : this.type = "password";
  }

  onSubmit(){
    if(this.loginForm.valid){
      
    }
  }
}