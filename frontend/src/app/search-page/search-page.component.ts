import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
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
    window.alert('hello from the other side' + JSON.stringify(ingredients));
 }
  constructor() { }

  ngOnInit() {
  }

}
