import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultHomeComponent } from './homeComponents/default-home/default-home.component';
import { BangaloreHomeComponent } from './homeComponents/bangalore-home/bangalore-home.component';
import { ChennaiHomeComponent } from './homeComponents/chennai-home/chennai-home.component';
import { DelhiHomeComponent } from './homeComponents/delhi-home/delhi-home.component';
import { HyderbadHomeComponent } from './homeComponents/hyderbad-home/hyderbad-home.component';
import { MumbaiHomeComponent } from './homeComponents/mumbai-home/mumbai-home.component';
import { AdminMoviesComponent } from './adminComponents/admin-movies/admin-movies.component';
import { AdminChennaiMoviesComponent } from './adminComponents/admin-chennai-movies/admin-chennai-movies.component';
import { AdminEditChennaiComponent } from './adminComponents/admin-edit-chennai/admin-edit-chennai.component';
import { AdminAddChennaiComponent } from './adminComponents/admin-add-chennai/admin-add-chennai.component';
import { TheatreCompComponent } from './theatreComponents/theatre-comp/theatre-comp.component';



const routes: Routes = [
  {path : 'home',component:DefaultHomeComponent},
  {path : 'home/bangalore',component:BangaloreHomeComponent},
  {path : 'home/chennai',component:ChennaiHomeComponent},
  {path : 'home/delhi',component:DelhiHomeComponent},
  {path : 'home/hyderbad',component:HyderbadHomeComponent},
  {path : 'home/mumbai',component:MumbaiHomeComponent},
  {path : 'home/movies',component:AdminMoviesComponent},
  {path : 'home/admchennai',component:AdminChennaiMoviesComponent},
  {path : 'home/admeditchennai/:id',component:AdminEditChennaiComponent,},
  {path : 'home/admaddchennai',component:AdminAddChennaiComponent},
  {path : 'home/theatre/',component:TheatreCompComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
