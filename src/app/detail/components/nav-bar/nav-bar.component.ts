import { Component,HostListener } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterLink, RouterLinkActive } from '@angular/router';
import {AuthService}from '../../services/auth.service'
@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  constructor(private auth:AuthService){}
  navList = {
    icon: '../../../../assets/logo.png',
    home: "Home",
    about: "About",
    services: "Services",
    contact: "Contact",
  }
  authList = {
    authLogin: "Login",
    authRegister:"Register",
  }

  isMenu: boolean = false;
  isMenux: boolean = true;
  @HostListener('window:scroll', ['$event'])
  scroll() {
    if (window.pageYOffset > 102) {
      this.isMenu = true
      this.isMenux = false
    } else {
      this.isMenu = false
      this.isMenux = true
    }
    if (window.pageYOffset > 880) {
      this.isMenu = false;
    } 
  }
  // islogin = false;
  // isregister = false
  isLogin =()=> this.auth.onLoginbtn()
  isRegister =()=> this.auth.onRegisterbtn()
  //   this.islogin = true;
  //   this.auth.login(this.islogin)
  // }
  // isRegisters = () => {
  //   this.isregister = true
  //   this.auth.register(this.isregister)
  // }
  
}
