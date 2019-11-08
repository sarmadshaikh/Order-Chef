import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
 templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
   images = [
    { img: "../assets/imgs/Home1.jpg" },
    { img: "../assets/imgs/Home4.jpg" },
    { img: "../assets/imgs/Home5.jpg" }
  ];
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "dots": true,
    "infinite": true,
    "autoplay":true
  };
}
