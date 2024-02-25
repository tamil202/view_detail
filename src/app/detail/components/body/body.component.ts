import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  innerBody = {
    image:'../../../../assets/image11.jpg',
    heading: 'Software Development',
    startup: 'Fresher',
    known: {
      dev: 'Development',
      manage: 'Management',
      testing:"Testing"
    },
    detailAbout:`Software development companies are becoming increasingly
                 important in today's world as more and more businesses and
                 individuals rely on software to carry out their operations`
  }
  
  onClick = () => {
    
  }

}
