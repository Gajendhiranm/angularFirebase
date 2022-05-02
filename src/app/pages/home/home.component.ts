import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { GithubService } from 'src/app/services/github.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  access: boolean = false;
  response: any[] = [];
  repos: any[] = [];
  constructor(
    private auth: AuthService,
    private user: GithubService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('user')) {
      this.access = true;
    }
  }

  async getUserinfo(e: any) {
    await this.user.getUser(e.user).subscribe(
      (e: any) => {
        this.response = [];
        this.response.push(e);
      },
      (err) => {
        this.toastr.error('Error', err.error.message);
      }
    );
    this.getUserrepos(e);
  }

  async getUserrepos(e: any) {
    await this.user.getRepos(e.user).subscribe(
      (e: any) => {
        this.repos = [];
        this.repos.push(e);
        console.log(this.repos[0]);
      },
      (err) => {
        this.toastr.error('Error', err.error.message);
      }
    );
  }
}
