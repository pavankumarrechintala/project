import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUesrsComponent } from './list-uesrs/list-uesrs.component';
import { ReposComponent } from './repos/repos.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';

const routes: Routes = [
  {path: '', redirectTo: 'Login', pathMatch: 'full'},
  {path: 'Login', component : LoginComponent },
  {path :'users' , component: ListUesrsComponent , canActivate : [AuthService]},
  {path : 'repos' , component : ReposComponent ,canActivate : [AuthService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
