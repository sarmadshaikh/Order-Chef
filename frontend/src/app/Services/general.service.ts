import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Customer} from "../customer";
import {NewUser} from "../sign-up/sign-up.component";


@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  API_KEY = 'YOUR_API_KEY';

  constructor(private httpClient: HttpClient) {
  }
handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage =`Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    // window.alert(errorMessage);
    return throwError(errorMessage);
  }


  public signUpAPI(newUser: NewUser) {
    return this.httpClient.post('https://orderchef.herokuapp.com/register/', newUser).pipe(catchError(this.handleError));
  }

  public GetIngredients() {
    return this.httpClient.get('https://orderchef.herokuapp.com/apiingredients/').pipe(catchError(this.handleError));
  }
  public GetRecipesPreIng(ingredientsIDs: string)
  {
    return this.httpClient.get('https://orderchef.herokuapp.com/rpi/?Ingredients_Ids=' + ingredientsIDs).pipe(catchError(this.handleError));
  }
  public GetRecipeInfo(url: string) {
    return this.httpClient.get(url).pipe(catchError(this.handleError));
  }
  public GetRecipeAllIng(id: string) {
    return this.httpClient.get('https://orderchef.herokuapp.com/ipr/?recipes_id=' + id).pipe(catchError(this.handleError));
  }
  public LogIn(user: Customer) {
    return this.httpClient.post('https://orderchef.herokuapp.com/api-token-auth/', user).pipe(catchError(this.handleError));
  }
}
