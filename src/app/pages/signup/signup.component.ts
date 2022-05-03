import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  isSigngedin = false;
  constructor(
    public firebaseService: AuthService,
    private toastr: ToastrService,
    public route: Router
  ) {}

  ngOnInit(): void {}

  async signup(e: any) {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(e.email)){
      this.toastr.error('Check the email', 'tada!');
      return;
    }
    if(e.password.length <=5){
      this.toastr.error('Check the password', 'tada!');
      return;
    }
    await this.firebaseService.signup(e.email, e.password);
    if (this.firebaseService.isLoggedIn) {
      this.isSigngedin = true;
      this.route.navigate(['/signin']);
      this.toastr.success('Account Created Sucessfully!', 'Have fun!');
    }
  }
}
