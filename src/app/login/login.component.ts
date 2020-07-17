import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private router : Router,
    private activatedRoute: ActivatedRoute
  ) { 
   
    

    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required,Validators.minLength(4)])
    });
  }

  ngOnInit() {


  }


  onSubmit() {
    if(this.loginForm.valid) {
      console.log(this.loginForm);
      this.router.navigate(['users']),
      localStorage.setItem('logged','In')
    } else {
      console.warn('Invalid Login !!')
    }
    
  }

}
