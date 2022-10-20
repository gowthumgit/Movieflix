import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BangaloreHomeComponent } from './homeComponents/bangalore-home/bangalore-home.component';
import { ChennaiHomeComponent } from './homeComponents/chennai-home/chennai-home.component';
import { MumbaiHomeComponent } from './homeComponents/mumbai-home/mumbai-home.component';
import { DelhiHomeComponent } from './homeComponents/delhi-home/delhi-home.component';
import { HyderbadHomeComponent } from './homeComponents/hyderbad-home/hyderbad-home.component';
import { DefaultHomeComponent } from './homeComponents/default-home/default-home.component';
import { AdminChennaiMoviesComponent } from './adminComponents/admin-chennai-movies/admin-chennai-movies.component';
import { AdminMoviesComponent } from './adminComponents/admin-movies/admin-movies.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminEditChennaiComponent } from './adminComponents/admin-edit-chennai/admin-edit-chennai.component';

import { AdminAddChennaiComponent } from './adminComponents/admin-add-chennai/admin-add-chennai.component';
import { TheatreCompComponent } from './theatreComponents/theatre-comp/theatre-comp.component';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    BangaloreHomeComponent,
    ChennaiHomeComponent,
    MumbaiHomeComponent,
    DelhiHomeComponent,
    HyderbadHomeComponent,
    DefaultHomeComponent,
    AdminChennaiMoviesComponent,
    AdminMoviesComponent,
    AdminEditChennaiComponent,
  
    AdminAddChennaiComponent,
       TheatreCompComponent,
       LoginComponent,
       SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
