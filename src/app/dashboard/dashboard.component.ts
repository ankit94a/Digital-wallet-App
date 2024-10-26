import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserModel } from 'shared/model/user.model';
import { UserAddEditComponent } from '../user-add-edit/user-add-edit.component';
import { DataService } from 'shared/service/data.service';
import { TransferAmountComponent } from '../transfer-amount/transfer-amount.component';
import { AccountInfoComponent } from '../account-info/account-info.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  user:UserModel=new UserModel()
  
  constructor(private dialog:MatDialog,private DataService:DataService){
  }
  createWallet(){
    const dailogRef = this.dialog.open(UserAddEditComponent)
    dailogRef.afterClosed().subscribe(res =>{
      if(res){
        
      }
    })
  }
  transferAmount(){
    const dailogRef = this.dialog.open(TransferAmountComponent)
    dailogRef.afterClosed().subscribe(res =>{
      if(res){
        
      }
    })
  }
  accountDetail(){
    const dailogRef = this.dialog.open(AccountInfoComponent)
    dailogRef.afterClosed().subscribe(res =>{
      if(res){
        
      }
    })
  }
}
