import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Recipes} from '../Recipes';
import {GeneralService} from '../Services/general.service';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  Recipe: Recipes;
  receivedUrl: string;
  DirectionsList: string[];
  RecipeIngs: object [];
  ingredients: Array<string> = [];
  choseningredients: string;
  choseningredientsarr: Array<string> = [];
  RecipeIngsTemp: object ;

  constructor(private activatedRoute: ActivatedRoute, private API: GeneralService) {
  }

  directions(direction: string) {
    this.DirectionsList = direction.split('**');
    const index: number = this.DirectionsList.indexOf('');
    if (index !== -1) {
      this.DirectionsList.splice(index, 1);
    }
  }
  exist(ingname: string) {
    for (let i = 0; i < this.choseningredientsarr .length; i++) {
        if (ingname === this.choseningredientsarr[i]) {
          return true;
        }
      }
  }

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe((params) => {
      this.receivedUrl = params['chosenRec'];
      this.choseningredients = params['chosenIng'];
      this.choseningredientsarr = this.choseningredients.split(',');
      const index: number = this.choseningredientsarr.indexOf('');
      if (index !== -1) {
       this.choseningredientsarr.splice(index, 1);
       }
      this.API.GetRecipeInfo(this.receivedUrl).subscribe((data: Recipes) => {
        this.Recipe = data;
        this.directions(this.Recipe.directions);
        this.API.GetRecipeAllIng(this.Recipe.recipe_id).subscribe((data: Recipes[]) => {
      this.RecipeIngs = data['results'];
      for (let i = 0; i < this.RecipeIngs.length; i++) {
          this.RecipeIngsTemp = this.RecipeIngs[i]['ingredients_id'];
          this.ingredients.push(this.RecipeIngsTemp['name']);
      }
    });
    });
    });
  }

}
