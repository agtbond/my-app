import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponentComponent } from './view/dashboard-component/dashboard-component.component';
import { LoginComponentComponent } from './view/login-component/login-component.component';


const routes: Routes = [
  {path: '', component: LoginComponentComponent},
  {path: 'dashboard', component: DashboardComponentComponent}
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }
