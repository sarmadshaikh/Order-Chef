import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Customer} from '../customer';

const httpOptions = {
   headers: new HttpHeaders({
    'Content-Type': 'application/json'
   })
};

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  API_KEY = 'YOUR_API_KEY';

  constructor(private httpClient: HttpClient) {
  }

public loginAPI(customer: Customer) {
    return this.httpClient.post('http://orderchef.herokuapp.com/rest-auth/login', customer);
}

  public signUpAPI() {
    return this.httpClient.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}');
  }
}

