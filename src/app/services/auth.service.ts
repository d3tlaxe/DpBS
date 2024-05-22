import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  apiUrl = "https://localhost:44390/api/Users/login";
  constructor(private httpClient:HttpClient) {

   }


   getUser(email:string, password:string): Observable<SingleResponseModel<LoginModel>>{
    let newPath = this.apiUrl + "?email="+email+"&password="+password
    return this.httpClient.get<SingleResponseModel<LoginModel>>(newPath);
   }


}
