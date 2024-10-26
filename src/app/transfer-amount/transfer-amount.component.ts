import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TransferAmount } from 'shared/model/transfer-amount.model';
import { DataService } from 'shared/service/data.service';

@Component({
  selector: 'app-transfer-amount',
  templateUrl: './transfer-amount.component.html',
  styleUrls: ['./transfer-amount.component.scss']
})
export class TransferAmountComponent {
  transferAmount: TransferAmount = new TransferAmount();
  constructor(private dataService: DataService, private dailogRef: MatDialogRef<TransferAmountComponent>) {

  }
  async send(transfer: NgForm) {
    if (transfer.invalid) {
      transfer.form.markAllAsTouched();
      return;
    }
    let senderUserInfo = await this.getUserData(this.transferAmount.senderAccountNumber);
    let recieverUserInfo = await this.getUserData(this.transferAmount.recieverAccountNumber);
    if (senderUserInfo.amount < this.transferAmount.amount) {
      return;
    }
    if (recieverUserInfo) {
      senderUserInfo.amount = Number(senderUserInfo.amount) - Number(this.transferAmount.amount);
      recieverUserInfo.amount = Number(recieverUserInfo.amount) + Number(this.transferAmount.amount);
      let updateSenderUser = await this.updateUserData(senderUserInfo);
      let updateRecieverUser = await this.updateUserData(recieverUserInfo);
      this.dailogRef.close(true);
    }
  }
  getUserData(userId: any) {
    return this.dataService.getItemById(userId).toPromise();
  }
  updateUserData(user: any) {
    return this.dataService.updateById(user.id, user).toPromise();
  }
  close(){
    this.dailogRef.close(true);
  }
}
