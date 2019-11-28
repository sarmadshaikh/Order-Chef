import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {NavigationBarComponent} from './navigation-bar/navigation-bar.component';
import {OurServicesComponent} from './our-services/our-services.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {HttpClientModule} from '@angular/common/http';
import {NgImageSliderModule} from 'ng-image-slider';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import {SearchPageComponent} from './search-page/search-page.component';
import {NgbAlertModule, NgbCarouselModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {SearchResultsComponent} from './search-results/search-results.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavigationBarComponent,
    OurServicesComponent,
    AboutUsComponent,
    ContactUsComponent,
    SignUpComponent,
    SearchPageComponent,
    SearchResultsComponent
  ],
  imports: [
    NgImageSliderModule,
    HttpClientModule,
    BrowserModule,
    SlickCarouselModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'login', component: LoginComponent},
      {path: 'ourservices', component: OurServicesComponent},
      {path: 'aboutus', component: AboutUsComponent},
      {path: 'contactus', component: ContactUsComponent},
      {path: 'signup', component: SignUpComponent},
      {path: 'search', component: SearchPageComponent},
      {path: 'search-result', component: SearchResultsComponent}
    ]),
    NgbCarouselModule,
       NgbPaginationModule,
    NgbAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
