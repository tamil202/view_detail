import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { BodyComponent } from '../../components/body/body.component';
import { Section2Component } from '../../components/section2/section2.component';
import { Section3Component } from '../../components/section3/section3.component';
import { RegisterComponent } from "../register/register.component";
import { LoginComponent } from "../login/login.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LoginComponent,RegisterComponent,CommonModule,NavBarComponent,BodyComponent,Section2Component,Section3Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
