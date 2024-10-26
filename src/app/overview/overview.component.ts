import { Component } from '@angular/core';
import { UserModel } from 'shared/model/user.model';
import { DataService } from 'shared/service/data.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  userList:UserModel[]=[];
  constructor(private DataService:DataService){
    this.getAllAccountInfo()
  }
  getAllAccountInfo(){
    this.DataService.getItems().subscribe(res =>{
      if(res){
        this.userList = res;
      }
    })
  }
}
