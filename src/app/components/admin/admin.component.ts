import { Component, OnInit } from '@angular/core';
import { DataTransferService } from '../../services/data-transfer.service';
import { LoginModel } from '../../models/loginModel';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {


  activeUser: LoginModel;

  constructor(private dataTransferService: DataTransferService) {
    //this.activeUser.userTypeId = Number(localStorage.getItem("userId"));
  }

  ngOnInit(): void {
    this.getUserData();
    this.activeUser.userTypeId = Number(localStorage.getItem("userTypeId"));
    console.log("Bu değeri localden okudum " + localStorage.getItem("userTypeId"));
  }


  getUserData() {
    this.activeUser = this.dataTransferService.getData();
  }



}
