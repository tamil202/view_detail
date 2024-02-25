import { Component,DoCheck,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
import {Router} from '@angular/router'
import { FormControl, FormsModule,ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';




@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers:[HttpClientModule,ToastrService],
})
export class LoginComponent implements DoCheck, OnInit {
  constructor(private router:Router, private auth:AuthService,private http: HttpClient,private frombuild:FormBuilder,private toastr: ToastrService) { }
  
  isClose: boolean = false
   isSubmitted:boolean = false
  ngOnInit(): void{
//     setTimeout(() => {
//      this.isClose = true
// }, 5000)
  }
  
  innerBody = {
    image: '',
    authtype:"Member Login"
  }
  
  inData:object = {}
 isClickForm = () => {
  let datades = {
    email: this.reqBody.get('email')?.value,
    password: this.reqBody.get('password')?.value
  };

  this.inData = {
    email: datades.email?.toLocaleLowerCase(),
    password: datades.password?.toLocaleLowerCase()
  };

  this.http.post("https://api-tau-pearl.vercel.app/inside", this.inData).subscribe({
    next: (data: any) => {
      if (data.message) {
        this.toastr.success(data.message);
        localStorage.setItem('userData', JSON.stringify(this.inData))
        this.router.navigate(['curd'])
      } else {
        this.toastr.warning("Unexpected response from server");
      }
    },
    error: (error) => {
      if (error.error && error.error.message) {
        this.toastr.error(error.error.message);
      } else {
        this.toastr.error("An unexpected error occurred. Please try again later.");
      }
    },
    complete: () => {
      setTimeout(() => {
        this.isClose = false;
      }, 3000);
    }
  });

  this.isSubmitted = true;
};
  reqBody = this.frombuild.group(
    {
   
    email: ['',[Validators.required,Validators.pattern('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')]],
    password:['',[Validators.required,Validators.minLength(6)]]
  }
  )
  onClick = () => {
    console.log(this.reqBody);
  }
  ngDoCheck(): void {
    this.isClose = this.auth.islogin
  }
  ngOninit() {
     this.isClose = this.auth.islogin
  }
  isCloseClick = () => {
      this.isClose = !this.isClose
      this.auth.isregister = this.isClose
  }
  redire = () => {
    this.router.navigate(['forget'])
  }
   
}
