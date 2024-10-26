import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: ()=> import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path:'overview',
    loadChildren: ()=> import('./overview/overview.module').then(m => m.OverviewModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
