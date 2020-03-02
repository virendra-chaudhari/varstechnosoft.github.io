import { Component, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})

export class FooterComponent {

  constructor(private router: Router) {
      
  }
  ngOnDestroy() {

  }
  websites:any[]=[
    {id:1,web:"Twitter",imgPath:"fa fa-twitter", url:'https://www.twitter.com'},
    {id:2,web:"facebook",imgPath:"fa fa-facebook", url:'https://www.facebook.com/vars.technosoft'},
    {id:3,web:"google+",imgPath:"fa fa-google-plus" ,url:'https://www.google.com'},
    {id:3,web:"instagram",imgPath:"fa fa-instagram",url:'https://www.instagram.com'},
    {id:4,web:"gmail",imgPath:"fa fa-pinterest",url:'https://www.pinterest.com'},
    {id:4,web:"linkedin",imgPath:"fa fa-linkedin",url:'https://www.linkedin.com'},
    {id:4,web:"linkedin",imgPath:"fa fa-youtube",url:'https://youtube.com/'}
    
  ]
  onSelect(website){
    window.open(website);
 }
}
