import { Component, OnInit } from '@angular/core';
import { DataTransferService } from '../../services/data-transfer.service';
import { LoginModel } from '../../models/loginModel';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  userTypeName: string = "";
  activeUser: LoginModel;




  constructor(private dataTransferService: DataTransferService) {

  }
  ngOnInit(): void {
    this.getUserData();
    console.log(this.activeUser.userTypeId);
    this.setUserNameForProfile(this.activeUser);
  }
  getUserData() {
    this.activeUser = this.dataTransferService.getData();
  }

  setUserNameForProfile(user: LoginModel) {
    if (user.userTypeId == 1) {
      
      this.userTypeName = "Admin";
    }
    else if (user.userTypeId == 2) {
      this.userTypeName = "Öğretim Görevlisi";        /// Buralara isim parametresi ayarlanacak 
    }
    else if (user.userTypeId == 3) {
      this.userTypeName = "Öğrenci";        /// Buralara isim parametresi ayarlanacak 
    }
  }
}
