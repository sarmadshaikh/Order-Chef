import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {GeneralService} from "../Services/general.service";
import {Ingredients} from "../Ingredients";
import {Recipes} from "../Recipes";


@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css']
})
export class OurServicesComponent implements OnInit {
  show: boolean;
  count: string;
  recipeslist: Array<Recipes> = [];
  ingredientsArr = [];
  recipe: object [];
  @Output() valueChange = new EventEmitter();
  ingredientsFormArray: Array<string> = [];
  public ingredient: Ingredients;
  ids: string;

  onChange(id: string, isChecked: boolean) {
    if (isChecked) {
      this.ingredientsFormArray.push(id);
    } else {
      const index = this.ingredientsFormArray.indexOf(id);
      this.ingredientsFormArray.splice(index, 1);
    }
  }

  userSearch(ingredients: Array<string>) {
    this.ids = '';
    this.show = false;
    ingredients.forEach((item) => this.ids += item + ',');
    this.ids = this.ids.replace(/,\s*$/, '');

    this.API.GetRecipesPreIng(this.ids).subscribe((data: Recipes[]) => {
      this.show = true;
      this.recipe = data['results'];
      for (let i = 0; i < this.recipe .length; i++) {
        if(!this.recipeslist.some((item) => item.name == this.recipe[i]['recipes_id']['name']))
          this.recipeslist.push(this.recipe[i]['recipes_id']);
      }
    });
  }

  SeeMore(ChosenRecipe: string) {
    this.router.navigate(['search'], {queryParams: {chosenRec: ChosenRecipe }});
  }

  constructor(private router: Router, private API: GeneralService) {
  }

  ngOnInit() {

    this.API.GetIngredients().subscribe((data: Ingredients[]) => {
      // console.log(data);
      this.ingredientsArr = data['results'];
    });
  }

}
