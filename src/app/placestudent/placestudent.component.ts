import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-placestudent',
  templateUrl: './placestudent.component.html',
  styleUrls: ['./placestudent.component.css']
})
export class PlacestudentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  studentInfo: any[] = [
    {
      imgUrl:"sachin1.jpg",
      name: "Sachin Machale",
      companyName: "NCPL Pvt.Ltd",
    },
    {
      imgUrl:"rani.jpg",
      name: "Rani Patil",
      companyName: "Pixel6 Web Studio",
    },
    {
      imgUrl:"mukesh.jpg",
      name: "Mukesh Dama",
      companyName: "NCPL Pvt. Ltd",
    },
    {
      imgUrl:"akshay.jpg",
      name: "Akshay Gathe",
      companyName: "Pixel6 Web Studio Pvt. Ltd",
    },
    
    {
      imgUrl:"suraj1.jpg",
      name: "Suraj Ovhal",
      companyName: "Proser Digital Solution",
    },
   
    {
      imgUrl:"rohini.jpg",
      name: "Rohini Nimbane",
      companyName: "Salgem Info Ptd. Ltd.",
    },
     {
      imgUrl:"tejaswini.jpg",
      name: "Tejaswini Uddan",
      companyName: "Orange Bits India Software Ptd. Ltd",
    }
  ]
}
