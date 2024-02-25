import { Injectable } from '@angular/core';
import {Router} from "@angular/router"

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router:Router) { }
  data:any[]=[]
   userdataRegister = (reqBody:object) => {
    this.data.push(reqBody)
    console.log(this.data);
   }
  islogin = false;
  isregister = false;
  

  // login = (isLogin: boolean) => {
  //   console.log(isLogin);
    
  //   this.islogin=isLogin
  // }
  // register = (isRegister: boolean) => {
  //   console.log(isRegister);
  //   this.isregister=isRegister
  // }


  // getlogin = () => {
  //   return this.login
  // }
  // getregister = () => { 
  //   return this.isregister
  // }


  onLoginbtn = () => {
    this.islogin = !this.islogin
  }
  onRegisterbtn = () => {
    this.isregister = !this.isregister
  }
  isclose = () => {
     this.isregister = !this.isregister;
  }

  canaccess = () => {
    let value = localStorage.getItem('userData');
     if (!value) {
     this.router.navigate(['']);
}  
  }
}


