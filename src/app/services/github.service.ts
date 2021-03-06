import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient) {}

  getUser = (e: any) => {
    return this.http.get<any>(`https://api.github.com/users/${e}`);
  };

  getRepos = (e: any) => {
    return this.http.get<any>(`https://api.github.com/users/${e}/repos`);
  };
}
