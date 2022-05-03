import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  isSigngedin = false;

  constructor(
    public firebaseService: AuthService,
    public route: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}
  async signin(e: any) {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(e.email)) {
      this.toastr.error('Check the email', 'tada!');
      return;
    }
    if (e.password.length <= 5) {
      this.toastr.error('Check the password', 'tada!');
      return;
    }

    await this.firebaseService
      .signin(e.email, e.password)
      .catch((e) => {
        this.toastr.error(e.message);
        return
      })
    if (this.firebaseService.isLoggedIn) {
      this.isSigngedin = true;
      this.route.navigate(['/home']);
      this.toastr.success('Signed in Sucessfully', 'Have fun!');
    }
  }
}
