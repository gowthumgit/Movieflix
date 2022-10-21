import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError,map } from 'rxjs/operators';
import { Cart } from '../models/cart';


@Injectable({
  providedIn: 'root'
})
export class TheatreService {

  uri = 'http://localhost:7070/cart';

  constructor(private http:HttpClient) { }

  //to get list of theatres
  getCart():Observable<any>{
      return this.http.get(`${this.uri}`);
  }

  //to get theatre details for single theatre using id
  getCartById(thid: any):Observable<any>{
    return this.http.get(`${this.uri}/${thid}`).pipe(catchError(this.errorMgmt));
  }

  //to create/add new theatre
  addCart(cart : Cart):Observable<any>{
      let url = `${this.uri}`;
      return this.http.post(url,cart).pipe(catchError(this.errorMgmt));
  }

  //update Theatre
  updateCart(id: any,cart: Cart) :Observable<any>{
    let url = `${this.uri}/${id}`;
    return this.http.patch(url,cart).pipe(catchError(this.errorMgmt));
  }

    //delete Theatre
    deleteCart(id: any) :Observable<any>{
      let url = `${this.uri}/${id}`;
      return this.http.delete(url).pipe(catchError(this.errorMgmt));
    }

    //error handling
    errorMgmt(error:HttpErrorResponse){
      let errorMessage = '';
      if(error.error instanceof ErrorEvent){
        //Get client side error
        errorMessage = error.error.message;
      }else{
        //Get server side error
        errorMessage = `Error Code : ${error.status}\n Message:${error.message}`;
      }
      console.log(errorMessage);
      return throwError(()=>{
        return errorMessage;
      })
    }
}
