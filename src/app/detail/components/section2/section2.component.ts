import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-section2',
  standalone: true,
  imports: [],
  templateUrl: './section2.component.html',
  styleUrl: './section2.component.css'
})
export class Section2Component {
  innerBody = {
    workPerform: '100%',
    work: "work performed",
    learn: "MEAN+",
    learPerform: "Intermediate",
    communication: "Communication",
    confidance: "well",
    software: 'Software company tools',
    softwareKnown: {
      IDE: "Vscode",
      Idx: `Integrated Development Environments`,
      idx:`IDE are comprehensive software applications that provide developers with a centralized workspace for writing, testing, and debugging code`,
      GIT: "Git",
      Git: `Version Control Systems`,
      TEAM: "Collaboration",
      Team: `Collaboration Tools`
    }
  };
  isMenu:boolean = false;
  @HostListener('window:scroll', ['$event'])
  scroll() {
    if (window.pageYOffset > 1000) {
     this.isMenu=true
    }
  }
}
