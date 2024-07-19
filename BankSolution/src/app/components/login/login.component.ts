import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtService } from 'src/app/service/jwt/jwt.servce';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  constructor(private service:JwtService,
              private fb:FormBuilder,
              private router:Router
  ){}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required]],
    })
  }
  onSubmit(): void {
    console.log(this.loginForm.value);
    this.service.register(this.loginForm.value).subscribe(
      (response) => {
        console.log(response)
        let res = JSON.stringify(response)
        if(res != null){
          alert("Hello, Your Token is " + res);
         const jwToken = response.jwt ;
        localStorage.setItem('jwt', res);
          this.router.navigateByUrl("/dashboard")
        }
      }
    )
  }
}
