import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  params: any;
  reposList:any[]=[]

  constructor( private router : Router,
    private activated : ActivatedRoute,
    private service : UserService) {
      this.params = this.activated.snapshot.queryParams.toconsume
     }

  ngOnInit() {
    this.service.getRepos(this.params).subscribe(data =>{
      console.log(data);
      this.reposList = data
      
    })
  }

  logOut(){
    localStorage.removeItem('logged')
    this.router.navigate([''])
  }

}
