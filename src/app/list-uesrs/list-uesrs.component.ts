import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-uesrs',
  templateUrl: './list-uesrs.component.html',
  styleUrls: ['./list-uesrs.component.css']
})
export class ListUesrsComponent implements OnInit {


  users :any[]=[]
  email = ''
  constructor(private service : UserService,
    private router : Router) { }

  ngOnInit() {
    this.service.getUsers().subscribe(data =>{
      console.log(data,'suceeded');
      this.users = data
      
    })
  }

  goRepos(userData) {
    console.log(userData);
    this.router.navigate(['repos'],
    {
     queryParams: { toconsume : userData },
   })
    
  }

}
