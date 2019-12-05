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

  constructor(private activatedRoute: ActivatedRoute, private API: GeneralService) {
  }

  directions(direction: string) {
    this.DirectionsList = direction.split('**');
    const index: number = this.DirectionsList.indexOf('');
    if (index !== -1) {
      this.DirectionsList.splice(index, 1);
    }
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.receivedUrl = params['chosenRec'];
      this.API.GetRecipeInfo(this.receivedUrl).subscribe((data: Recipes) => {
        this.Recipe = data;
        this.directions(this.Recipe.directions);
      });
    });
  }

}
