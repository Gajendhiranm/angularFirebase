import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  @Input() repo : any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.repo);
    
  }

}
