import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SharingService } from 'src/app/services/sharing.service';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-wallet-component',
  templateUrl: './wallet-component.component.html',
  styleUrls: ['./wallet-component.component.css']
})
export class WalletComponentComponent implements OnInit {

  formSubmitted = false;
  walletForm!:FormGroup;
  username!:FormControl;
  cardNumber!:FormControl;
  cvvNumber!:FormControl;
  amount!:FormControl;
  userData!:User;

  constructor(public fb: FormBuilder,private acRoute:ActivatedRoute,private router:Router,private sharingService:SharingService,private loginService:LoginService) {
   
   }
   

  ngOnInit(): void {
    this.username = new FormControl('', [Validators.required,Validators.minLength(3),Validators.pattern('^[a-zA-Z ]*$')]);
    this.cardNumber = new FormControl('', [Validators.required, Validators.pattern('^[0-9]{16}$')]);
    this.cvvNumber = new FormControl('', [Validators.required, Validators.pattern('^[0-9]{3}$')]);
    this.amount=new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]);

    
    this.walletForm=new FormGroup({
      'username':this.username,
      'cardNumber':this.cardNumber,
      'cvvNumber':this.cvvNumber,
      'amount':this.amount,
      
    });
  
  }
  editUser(){
    //console.log("edit User...");
    this.userData=this.sharingService.getUser();
    this.formSubmitted = true;
   // console.log("Edit user id use formgrp")
    //console.log(this.editUseForm.value.userId);
    
    if(window.confirm("are you sure???")){
      
      let id = this.userData._id;
      this.userData.userBalance=this.userData.userBalance+this.walletForm.value.amount;
      this.loginService.updateUser(id,this.userData).subscribe({
        complete :()=>{
          this.router.navigateByUrl('/user');
          console.log('User updated successfully')
        },
        
        error : (e) =>{
          console.log(e)
        }
      
      });
      
      this.sharingService.setUser(this.userData);
      alert("Payment Successful!!!!!")
    }
}
  

}
