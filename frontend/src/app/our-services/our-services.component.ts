import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css']
})
export class OurServicesComponent implements OnInit {
    show: boolean;
    count: string;
// imageList: Array<Image> = [];
imageList = [
    { path: "assets/imgs/Recipe1.jpg", name:"Potato soup", details:"You will love this easy homemade potato soup recipe with potatoes, veggies, garlic, and a creamy." },
    { path: "assets/imgs/Recipe2.jpg" , name:"Fahitta", details:"This flavorful recipe is definitely on my weeknight dinner rotation."  },
    { path: "assets/imgs/Recipe3.jpg" , name:"Oven baked chicken and rice", details:"Easy oven baked chicken and rice with garlic butter mushrooms mixed through is winner of a chicken dinner!" },
    ];

  @Output() valueChange = new EventEmitter();
ingredientsFormArray: Array<any> = [];
  ingredientsArr = [
    {name : 'ingredient1', id: 1},
    {name : 'ingredient2', id: 2},
    {name : 'ingredient3', id: 3},
    {name : 'ingredient4', id: 4},
    {name : 'ingredient5', id: 5},
    {name : 'ingredient6', id: 6},
    {name : 'ingredient7', id: 7},
  ];

  onChange(ingredient: string, isChecked: boolean) {
      if(isChecked) {
        this.ingredientsFormArray.push(ingredient);
      } else {
        const index = this.ingredientsFormArray.indexOf(ingredient);
        this.ingredientsFormArray.splice(index,1);
      }
  }
  userSearch(ingredients) {
    window.alert('hello from the other side 1' + JSON.stringify(ingredients));
     this.valueChange.emit(JSON.stringify(ingredients));
     this.show = true;
 }
SeeMore() {
  //  window.alert('hi');
  this.router.navigateByUrl('search');
}
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
