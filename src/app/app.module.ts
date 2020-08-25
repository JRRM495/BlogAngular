import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from './components/header/header.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { RegSuccessComponent } from './components/auth/reg-success/reg-success.component';
import { LoginComponent } from './components/auth/login/login.component'
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpClientInterceptor} from './http-client-interceptor';
import { LogGuestComponent } from './components/log-guest/log-guest.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    RegSuccessComponent,
    LoginComponent,
    HomeComponent,
    PostComponent,
    AddPostComponent,
    LogGuestComponent
  ],
  imports: [
    BrowserModule,
    EditorModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpClientInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
