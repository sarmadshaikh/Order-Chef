import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  count: string;
// imageList: Array<Image> = [];
imageList = [
    { path: "assets/imgs/Recipe1.jpg", name:"Potato soup", details:"You will love this easy homemade potato soup recipe with potatoes, veggies, garlic, and a creamy." },
    { path: "assets/imgs/Recipe2.jpg" , name:"Fahitta", details:"This flavorful recipe is definitely on my weeknight dinner rotation."  },
    { path: "assets/imgs/Recipe3.jpg" , name:"Oven baked chicken and rice", details:"Easy oven baked chicken and rice with garlic butter mushrooms mixed through is winner of a chicken dinner!" },
    ];
  constructor() { }

  ngOnInit() {
  }
    displayCounter(count) {
        // this.count = count;
        // if (this.count == '["Potato"]') {
        //
        //   var img = new Image();
        //   img.path="assets/imgs/Recipe1.jpg";
        //   img.name="Potato soup";
        //   img.details="You will love this easy homemade potato soup recipe with potatoes, veggies, garlic, and a creamy.";
        //
        //   this.imageList.push(img);
        //   window.alert('hello from the other side 2' +this.imageList[0].name );
        // }

        //this.images.push( { img: "assets/imgs/Recipe1.jpg", name:, details:"You will love this easy homemade potato soup recipe with potatoes, veggies, garlic, and a creamy." });
    }
}
