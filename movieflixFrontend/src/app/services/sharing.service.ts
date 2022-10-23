import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SharingService {
  private userDetails : string="userDetails";
  
  userVal!: User;

  constructor() { }
  setUser(userVal: any) {
    localStorage.setItem(this.userDetails, JSON.stringify(userVal));
  //  console.log("from sharing set user service");
   // console.log(userVal)
  }

  getUser() {
    let userVal = localStorage.getItem(this.userDetails);
  //  console.log("from sharing get user service");
   // console.log(userVal)
    
    return JSON.parse(userVal || '{}');
  }

  clearUser() {
    localStorage.removeItem(this.userDetails);
  }

  cleanAll() {
    localStorage.clear()
  }
}
