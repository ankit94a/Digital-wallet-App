import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserModel } from 'shared/model/user.model';
import { DataService } from 'shared/service/data.service';

@Component({
  selector: 'app-user-add-edit',
  templateUrl: './user-add-edit.component.html',
  styleUrls: ['./user-add-edit.component.scss']
})
export class UserAddEditComponent {
  user:UserModel =new UserModel();
  constructor(private DataService:DataService,private dialogRef:MatDialogRef<UserAddEditComponent>){}
 
  createWallet(userForm:NgForm){
    if(userForm.invalid){
      userForm.form.markAllAsTouched();
      return;
    }
    this.DataService.postItems(this.user).subscribe(res =>{
      if(res){
        this.dialogRef.close(true)
      }
    })
  }
  close(){
    this.dialogRef.close(true);
  }
}
