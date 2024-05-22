import { Component, OnInit, Output } from '@angular/core';
import { LoginModel } from '../../models/loginModel';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../../models/listResponseModel';
import { response } from 'express';
import { SingleResponseModel } from '../../models/singleResponseModel';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Console } from 'console';
import { RouterLink } from '@angular/router';
import { DataTransferService } from '../../services/data-transfer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;


  recievedModel: LoginModel;
  loginMessage: boolean = false;

  typeOfUser: string;


  userTypeId:string;


  constructor(private formbuilder: FormBuilder, private authService: AuthService, private dataTransferService: DataTransferService) {
    this.loginMessage = false;
  }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.formbuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    })
  }


  getUser() {
    let loginModel = Object.assign({}, this.loginForm.value)
    this.authService.getUser(loginModel.email, loginModel.password).subscribe(response => {
      console.log(response);

      if (response.success) {
        this.loginMessage = true;
        this.recievedModel = response.data;

        this.dataTransferService.setData(this.recievedModel);
        
        this.userTypeId = this.recievedModel.userTypeId.toString();
        localStorage.setItem("userTypeId", this.userTypeId);
        
        if (this.recievedModel.userTypeId == 1) {
          this.typeOfUser = "admin";
        } else if (this.recievedModel.userTypeId == 2) {
          this.typeOfUser = "prelector";
        } else if (this.recievedModel.userTypeId == 3) {
          this.typeOfUser = "student";
        }

      } else {
        this.loginMessage = false;
      }

    }
    )
  }


}
