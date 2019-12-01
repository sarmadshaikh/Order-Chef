import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {GeneralService} from "../Services/general.service";

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css']
})
export class OurServicesComponent implements OnInit {
    show: boolean;
    count: string;
recipeslist : Array<any> = [];
ingredientsArr = [];
// = [
//     { path: "assets/imgs/Recipe1.jpg", name:"Potato soup", details:"You will love this easy homemade potato soup recipe with potatoes, veggies, garlic, and a creamy." },
//     { path: "assets/imgs/Recipe2.jpg" , name:"Fahitta", details:"This flavorful recipe is definitely on my weeknight dinner rotation."  },
//     { path: "assets/imgs/Recipe3.jpg" , name:"Oven baked chicken and rice", details:"Easy oven baked chicken and rice with garlic butter mushrooms mixed through is winner of a chicken dinner!" },
//     ];

  @Output() valueChange = new EventEmitter();
ingredientsFormArray: Array<any> = [];


  onChange(ingredient: string, isChecked: boolean) {
      if(isChecked) {
        this.ingredientsFormArray.push(ingredient);
      } else {
        const index = this.ingredientsFormArray.indexOf(ingredient);
        this.ingredientsFormArray.splice(index,1);
      }
  }
  userSearch(ingredients) {
    this.show = false;
    for(let i = 1; i <= this.ingredientsFormArray.length; i++) {
       if (ingredients == 'Potato') {

         this.recipeslist.push({
           path: "assets/imgs/Recipe1.jpg",
           name: "Potato soup",
           details: "You will love this easy homemade potato soup recipe with potatoes, veggies, garlic, and a creamy."
         });
         this.show = true;
       }
     }
 }

  SeeMore(name: string) {
    this.router.navigate(['search'], {queryParams: {idRec: name}});
}
  constructor(private router: Router, private API: GeneralService) {}

 ngOnInit() {

    this.API.GetIngredients().subscribe((data: any[]) => {
      // console.log(data);
      this.ingredientsArr = data;
    });
  }

}
