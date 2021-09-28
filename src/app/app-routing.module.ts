import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { HorsesComponent } from './pages/horses/horses.component';
import { NewHorseComponent } from './pages/new-horse/new-horse.component';
import { UserLoginComponent } from './pages/user-login/user-login.component';

const routes: Routes = [{
    path: '', component: HomeComponent
},{
    path: 'horses', component: HorsesComponent
},
{
    path: 'contact', component: ContactComponent
},
{
    path: 'login', component: UserLoginComponent
},
{
    path: 'addHorse', component: NewHorseComponent

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
