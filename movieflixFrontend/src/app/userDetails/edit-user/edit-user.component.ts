import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { SharingService } from 'src/app/services/sharing.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  formSubmitted = false;
  editUseForm!: FormGroup;
  userData : User[] = [];
  userId!:FormControl;
  userEmail!:FormControl;
  userLanguage!:FormControl;
  userLocation!:FormControl;

  userVal!:User;
  user!:User;
  
  
  constructor( private acRoute:ActivatedRoute,private router:Router,private sharingService:SharingService,private loginService:LoginService) {
    //this.storageUpdate();
   }

  ngOnInit(): void {
    this.userId=new FormControl();
    this.userEmail=new FormControl();
    this.userLanguage=new FormControl();
    this.userLocation=new FormControl();
  

    this.editUseForm=new FormGroup({
      'userId':this.userId,
      'userEmail':this.userEmail,
      'userLanguage':this.userLanguage,
      'userLocation':this.userLocation,
      
    });
    this.updateUser();
    let id = this.acRoute.snapshot.paramMap.get('id');
    console.log("Edit user id")
    console.log(id);
    this.getUser(id);
  }
  updateUser() {
    
  }
  getUser(id: any){
    this.loginService.getUserById(id).subscribe((data) =>{
      console.log("Edit user values")
    console.log(data);
    
      this.editUseForm.setValue({
        userId : data['userId'],
        userEmail:data['userEmail'],
        userLanguage : data['userLanguage'],
        userLocation : data['userLocation'],
        
      });
    });
  }
  editUser(){
    console.log("edit User...");
    this.formSubmitted = true;
   // console.log("Edit user id use formgrp")
    //console.log(this.editUseForm.value.userId);
    
    if(window.confirm("are you sure???")){
      this.storageUpdate(); 
      let id = this.acRoute.snapshot.paramMap.get('id');
      this.loginService.updateUser(id,this.editUseForm.value).subscribe({
        complete :()=>{
          this.router.navigateByUrl('/user');
          console.log('User updated successfully')
        },
        
        error : (e) =>{
          console.log(e)
        }
      });
    }
}
storageUpdate(){
  this.user=this.sharingService.getUser();
  //this.sharingService.clearUser();
  this.user.userId = this.editUseForm.value.userId;
  this.user.userEmail = this.editUseForm.value.userEmail;
  this.user.userLocation = this.editUseForm.value.userLocation;
  this.user.userLanguage = this.editUseForm.value.userLanguage;
      
      this.sharingService.setUser(this.user);
      
}


}
