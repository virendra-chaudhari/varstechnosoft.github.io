import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cources',
  templateUrl: './cources.component.html',
  styleUrls: ['./cources.component.css']
})
export class CourcesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var toggler = document.getElementsByClassName("caret");
    var i;
    for (i = 0; i < toggler.length; i++) {
      toggler[i].addEventListener("click", function () {
        this.parentElement.querySelector(".nested").classList.toggle("active");
        this.classList.toggle("caret-down");
      });
    }
  }

  courseDetails: any[] = [
    {
      id:1,
      buttonLabel: 'test label 1',
      courseName: "Angular 8",
      details: "AngularJS is a javascript-based open-source front-end web framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single page application.",
      syllabus: "xyz",
      modalBody: 'Demo Modal body contents #1'
    },
    {
      id:2,
      buttonLabel: 'test label 2',
      courseName: "React JS",
      details: "ReactJS is javaScript library for building user interface. It is maintained by Facebook and a community of individual developers and companies.",
      syllabus: "xyz",
      modalBody: 'Demo Modal body contents #2'
    },
    {
      id:3,
      buttonLabel: 'test label 3',
      courseName: "Node JS",
      details: "Node.js allow the creating of web servers and networking tools using Javascript and a collection of 'modules that handles various core functionalities.'",
      syllabus: "xyz",
      modalBody: 'Demo Modal body contents #3'
    },
    {
      id:4,
      buttonLabel: 'test label 4',
      courseName: "JavaScript",
      details: "Javascript, often abbreviated as JS, is an interpreted programing laguage that comforms to the ECMAScript specification.Javascript is high-level, often just-in-time compiled, and milti-paradim.",
      syllabus: "xyz",
      modalBody: 'Demo Modal body contents #1'

    },
    {
      id:5,
      buttonLabel: 'test label 5',
      modalBody: 'Demo Modal body contents #1',
      courseName: "HTML5",
      details: "Hyper Text Markup Language (HTML) is a markup language for creating a webpage. HTML5 is a software solution stack that define the properties and behaviors of web page content by implementing a markup based pattern to it.",
      syllabus: "xyz"
    },
    {
      id:6,
      buttonLabel: 'test label 6',
      courseName: "CSS3",
      details: "Cascading Style Sheet (CSS) is a style sheet language used for describing the presentation of a document write in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and Javascript.",
      syllabus: "xyz",
      modalBody: 'Demo Modal body contents #6'
    },
    {
      id:7,
      buttonLabel: 'test label 7',
      courseName: "Bootstrap",
      modalBody: 'Demo Modal body contents #7',
      details: "Bootstrap is front-end web framework for designing websites and web applications. It contains HTML- and CSS-based design templates for typography, forms, buttons, navigation and other interface components, as well as optional JavaScript extensions.",
      syllabus: "Bootstrap Setup Benifits of Bootstrap Basics of Bootstrap Project Design Using Bootstrap"
    }

  ]


}
