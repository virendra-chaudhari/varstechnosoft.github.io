import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  placementLogo: any[] = [
    {
      companyName: "NCPL"
      , companyLogo: "logoNcpl.png"
    },
    {
      companyName: "OrnageBits"
      , companyLogo: "orangeBitsLogo.png"
    },
    {
      companyName: "Pixel6"
      , companyLogo: "pixel6Logo.png"
    },{
      companyName: "Selgrm"
      , companyLogo: "selgumLogo.jpg"
    },
    {
      companyName: "selgem"
      , companyLogo: "selgemLogo.png"
    },
    {
      companyName: "Proser Digital"
      , companyLogo: "proserLogo.jpg"
    }
  ]

}
