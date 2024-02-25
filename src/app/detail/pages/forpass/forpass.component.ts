import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forpass',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './forpass.component.html',
  styleUrl: './forpass.component.css',
})
export class ForpassComponent {
  constructor(private tosat:ToastrService,private http:HttpClient, private router:Router){}
  useremail = {
     userinpdata:''
     
   }
  password: any = '';
  conformpassword: any = '';


  ischeck = () => {
   
    if (this.password === this.conformpassword) {
      let anohtervalue = {
        email: this.useremail.userinpdata,
        password:this.password
      }
       
      this.http.post('https://api-tau-pearl.vercel.app/changepass', anohtervalue).subscribe({
        next: (data:any) => {
          this.tosat.success(data.message)
          this.router.navigate([''])
        }, error: (e) => {
          this.tosat.error(e.meassage)
        }, complete: () => {
          console.log(`finish from server`);
          
         }
       })
    } else {
      this.tosat.warning('password does match')
  }
  }
  
  isClick = () => {
    let obj = {
      email:this.useremail.userinpdata
    }
    this.http.post('https://api-tau-pearl.vercel.app/forpass', obj).subscribe({
      next: (data:any) => {
        console.log(data.meassage);
        this.isconform = data.message;
        this.isbtn = false;
        this.isbtn1 = true
        this.tosat.success(`OKAY`)
      },
      error: (error) => {
        if (error) {
          this.tosat.error(error.message)
          console.log(error.message);
          
          }
      },
      complete: () => {
        console.log(`complate from server`);
        
      }
    })
    console.log(obj.email);
    
  }
  isconform: boolean = false;
  isbtn: boolean = true;
  isbtn1: boolean = false;

  

}
