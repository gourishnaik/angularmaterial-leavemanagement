import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { UpdateLeaveComponent } from './update-leave/update-leave.component';
import { ViewLeaveComponent } from './view-leave/view-leave.component';

const routes: Routes = [
  {path:'',component:ApplyLeaveComponent},
  {path:'viewleave',component:ViewLeaveComponent},
  {path:'updateleave/:id',component:UpdateLeaveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
