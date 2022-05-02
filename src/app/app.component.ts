import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLogout = false
  constructor(private firebase : AuthService ) {
    
   }

  ngOnInit(): void {
    
    console.log(this.firebase.isLoggedIn);
    this.isLogout = this.firebase.isLoggedIn;
    
  }
}
