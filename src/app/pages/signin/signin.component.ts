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
    await this.firebaseService.signin(e.email, e.password);
    if (this.firebaseService.isLoggedIn) {
      this.isSigngedin = true;
      this.route.navigate(['/home']);
      this.toastr.success('Signed in Sucessfully', 'Have fun!');
    }
  }
}
