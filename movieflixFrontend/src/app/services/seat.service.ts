import { Injectable } from '@angular/core';
import { MockData } from '../mock-data/mock-seats-data';
import { Seat } from '../models/seat';

@Injectable({
  providedIn: 'root'
})
export class SeatService {
  
  addProduct(newProduct: Seat) {
    this.products.push(newProduct);
  }

  products : Seat[] = [];
  constructor() { 
    this.products = MockData.Seats;
  }

  getSeats() : Seat[]{
    return this.products;
  }


}