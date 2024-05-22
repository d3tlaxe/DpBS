import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {


  ActiveUser : LoginModel = {id : 0, eMail : "", password :"", userTypeId :0}
  constructor() { 

      
  }


  getData(){
      return this.ActiveUser;

  }

  setData(user : LoginModel){

      //this.ActiveUser = Object.assign({}, user);

       this.ActiveUser.id = user.id;
       this.ActiveUser.eMail = user.eMail;
       this.ActiveUser.password = user.password;
       this.ActiveUser.userTypeId = user.userTypeId;
  }

}
