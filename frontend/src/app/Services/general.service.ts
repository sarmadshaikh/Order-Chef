import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  API_KEY = 'YOUR_API_KEY';

  constructor(private httpClient: HttpClient) {
  }

  public loginAPI() {
    return this.httpClient.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}');

  }

  public signUpAPI() {
    return this.httpClient.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}');
  }
}

