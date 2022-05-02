import { Component, Input, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
@Input() user : any= [];
  constructor(public userinfo : GithubService) { }

  ngOnInit(): void {
    console.log(this.user);
    
  }

}
