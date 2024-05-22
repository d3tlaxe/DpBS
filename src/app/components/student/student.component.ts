import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../../models/loginModel';
import { DataTransferService } from '../../services/data-transfer.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit {


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
