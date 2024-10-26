import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from 'shared/material.module';
import { UserAddEditComponent } from '../user-add-edit/user-add-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransferAmountComponent } from '../transfer-amount/transfer-amount.component';
import { AccountInfoComponent } from '../account-info/account-info.component';


@NgModule({
  declarations: [
    DashboardComponent,UserAddEditComponent,TransferAmountComponent,AccountInfoComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
