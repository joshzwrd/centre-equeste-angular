import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { HorsesComponent } from './pages/horses/horses.component';

const routes: Routes = [{
    path: '', component: HomeComponent
},{
    path: 'horses', component: HorsesComponent
},
{
    path: 'contact', component: ContactComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
