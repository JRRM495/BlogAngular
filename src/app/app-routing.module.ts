import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from 'src/app/components/auth/register/register.component'
import { LoginComponent } from './components/auth/login/login.component';
import {RegSuccessComponent} from './components/auth/reg-success/reg-success.component';
import {HomeComponent} from 'src/app/components/home/home.component';
import {PostComponent} from 'src/app/components/post/post.component';
import {AddPostComponent} from 'src/app/components/add-post/add-post.component';
import { AuthGuard } from './auth.guard';
import { LogGuestComponent} from 'src/app/components/log-guest/log-guest.component';
const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register-success', component: RegSuccessComponent},
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'post/:id', component: PostComponent},
  {path: 'addpost', component: AddPostComponent, canActivate:[AuthGuard]},
  {path: 'guest', component: LogGuestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
