import { Component, Input, OnInit, Output } from '@angular/core';
import { LoginModel } from '../../models/loginModel';
import { ActivatedRoute } from '@angular/router';
import { DataTransferService } from '../../services/data-transfer.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent implements OnInit {

  activeUser: LoginModel;


  constructor(private route: ActivatedRoute, private dataTransferService:DataTransferService) {

  }

  ngOnInit(): void {
    this.getUserData();

  }


  getUserData(){
    this.activeUser = this.dataTransferService.getData();
  }


}

