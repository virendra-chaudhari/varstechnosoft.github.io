import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public router:Router) { }

  websites:any[]=[
    {id:1,web:"Twitter",imgPath:"twitter.jpg", url:'https://www.google.com'},
    {id:2,web:"facebook",imgPath:"facebook.jpg", url:'https://www.facebook.com/vars.technosoft'},
    {id:3,web:"google+",imgPath:"google-plus.jpg" ,url:'https://www.google.com'},
    {id:3,web:"instagram",imgPath:"instagram.jpg",url:'https://www.instagram.com'},
    {id:4,web:"gmail",imgPath:"gmail.jpg",url:'https://www.gmail.com'},
    {id:4,web:"linkedin",imgPath:"linked-in.jpg",url:'https://www.linkedin.com'}
    
  ]
  ngOnInit() {
  }
  onSelect(website){
     window.open(website);
  }
}
