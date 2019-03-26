import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { HighLightCardDirective } from './high-light-card.directive';
import { DisplayMovieListDirective } from './display-movie-list.directive';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    UserProfileComponent,
    MovieCardComponent,
    HighLightCardDirective,
    DisplayMovieListDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
