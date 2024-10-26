import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserModel } from 'shared/model/user.model';
import { DataService } from 'shared/service/data.service';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss']
})
export class AccountInfoComponent {
  user:UserModel = new UserModel
  searchAccountNumber!:number;
  constructor(public dataService:DataService,public dialogRef:MatDialogRef<AccountInfoComponent>){}

  getUser(){
    this.dataService.getItemById(this.searchAccountNumber).subscribe(res =>{
      if(res){
        this.user = res;
      }
    })
  }
  close(){
    this.dialogRef.close(true);
  }
}
