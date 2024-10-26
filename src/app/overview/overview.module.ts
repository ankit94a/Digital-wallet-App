import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './overview.component';
import { MaterialModule } from 'shared/material.module';


@NgModule({
  declarations: [OverviewComponent],
  imports: [
    CommonModule,
    OverviewRoutingModule,
    MaterialModule
  ]
})
export class OverviewModule { }
