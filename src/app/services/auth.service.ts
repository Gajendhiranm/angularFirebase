import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;

  constructor(public firebaseAuth: AngularFireAuth) {}

  //for signing
  
  async signin(email: string, password: string) {
    
    await this.firebaseAuth.signInWithEmailAndPassword(email,password)
    .then(res => {
      this.isLoggedIn = true;
      localStorage.setItem("user",JSON.stringify(res.user))
      localStorage.setItem("email",res.user?.email || "")

    })
  }



  //for signup
  async signup(email: string, password: string) {
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
    .then(res => {
      this.isLoggedIn = true;
      //localStorage.setItem("user",JSON.stringify(res.user))
    })
  }

//for logout

logout(){
  this.firebaseAuth.signOut();
  localStorage.removeItem('user')
}


}
