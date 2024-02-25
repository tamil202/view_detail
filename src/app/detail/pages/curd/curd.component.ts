import { Component,OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import {AuthService} from '../../services/auth.service'

@Component({
  selector: 'app-curd',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './curd.component.html',
  styleUrl: './curd.component.css'
})
export class CurdComponent {
  constructor(private auth:AuthService){}
  todoValue: string[] = ["hello"]
  clientData: string = ''

  DataAddOn() {
    if (this.clientData === '') {
      
      console.log(`enter value`);
      return
     
    } else {
      this.todoValue.push(this.clientData)
      
    }
    console.log(this.todoValue);
  }
  
  deleteItem(e: any) {
    this.todoValue.splice(e, 1)
    console.log(`${e} index deleted`);
     
  }
  ngOnInit() {
    this.auth.canaccess()
  }
}
