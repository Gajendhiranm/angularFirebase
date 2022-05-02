import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private firebase: AuthService, private route: Router) {}
  isSignedin = false;
  ngOnInit(): void {
    if(localStorage.getItem('user') !== null){
      this.isSignedin = true;
    }
    else{
      this.isSignedin = false;
    }
  }
  logoutUser() {
    this.firebase.logout();
    this.route.navigate(['/signin'])
  }


  }

