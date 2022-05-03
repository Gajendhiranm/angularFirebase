import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire/compat';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReposComponent } from './components/repos/repos.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AuthService } from './services/auth.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    ReposComponent,
    UserCardComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    PagenotfoundComponent,
    SigninComponent,
    SignupComponent,

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyAweODiSgvOJJMhNOlUqwppli8NavqUoAU",
        authDomain: "fir-angular-auth-1f069.firebaseapp.com",
        projectId: "fir-angular-auth-1f069",
        storageBucket: "fir-angular-auth-1f069.appspot.com",
        messagingSenderId: "518681304239",
        appId: "1:518681304239:web:ff21891347e8bfce3e085a"
      }
    ),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot({
      timeOut: 10000,
    positionClass: 'toast-bottom-right',
    preventDuplicates: true,
    })
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
