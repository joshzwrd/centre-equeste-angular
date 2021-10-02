import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HorsesComponent } from './pages/horses/horses.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserLoginComponent } from './pages/user-login/user-login.component';
import { NewHorseComponent } from './pages/new-horse/new-horse.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HorsesComponent,
    ContactComponent,
    NavbarComponent,
    UserLoginComponent,
    NewHorseComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
