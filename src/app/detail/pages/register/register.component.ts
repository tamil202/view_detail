import { Component, OnInit, DoCheck } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule,ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule,ReactiveFormsModule,],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers:[HttpClient,HttpClientModule,ToastrService],
  
})
export class RegisterComponent implements OnInit,DoCheck  {
  constructor(private auth: AuthService, private http: HttpClient, private frombuild: FormBuilder, private toastr: ToastrService) { }
  isClose: boolean = false
  isSubmitted: boolean = false;
  isLoading:boolean = false
  inData:object = {}
  onRegister = () => {
     this.auth.userdataRegister(this.reqBody)
  }
  isClickForm = () => {
    let datades = {
      username: this.reqBody.get('username')?.value,
      eamil: this.reqBody.get('email')?.value,
      password:this.reqBody.get('password')?.value
    } 
    
    this.inData = {
      username: datades.username?.toLocaleLowerCase(),
      email: datades.eamil?.toLocaleLowerCase(),
      password:datades.password?.toLocaleLowerCase(),
    }
    this.http.post("https://api-tau-pearl.vercel.app/create", this.inData).subscribe({
        next: (data: any) => {
      if (data.message) {
        this.toastr.success(data.message);
        this.isClose =false
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
    })
    this.isSubmitted = true
  }
  reqBody = this.frombuild.group(
    {
    username:['',[Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
    email: ['',[Validators.required,Validators.pattern('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')]],
    password:['',[Validators.required,Validators.minLength(6)]]
  }
  )
  ngOnInit(): void {
    // this.isClose = this.auth.getregister()
    // // console.log(this.isClose + "    from register");
    // this.isClose = this.auth.isregister
    // console.log(this.isClose + "    from resgister");
  }
  ngDoCheck(): void {
    this.isClose = this.auth.isregister
  }
  innerBody = {
    image: '',
    authtype:"Member Register"
  }
  isCloseClick = () => {
      this.isClose = !this.isClose
      this.auth.isregister = this.isClose
  }
}