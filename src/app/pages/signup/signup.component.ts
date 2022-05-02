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
    await this.firebaseService.signup(e.email, e.password);
    if (this.firebaseService.isLoggedIn) {
      this.isSigngedin = true;
      this.route.navigate(['/signin']);
      this.toastr.success('Account Created Sucessfully!', 'Have fun!');
    }
  }
}
