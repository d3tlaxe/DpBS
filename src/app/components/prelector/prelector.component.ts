import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../../models/loginModel';
import { DataTransferService } from '../../services/data-transfer.service';

@Component({
  selector: 'app-prelector',
  templateUrl: './prelector.component.html',
  styleUrl: './prelector.component.css'
})
export class PrelectorComponent implements OnInit {


  activeUser: LoginModel;
  constructor(private dataTransferService: DataTransferService) {

  }

ngOnInit(): void {
  this.getUserData();
}

  getUserData() {
    this.activeUser = this.dataTransferService.getData();
  }



}
