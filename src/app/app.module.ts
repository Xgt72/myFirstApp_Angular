import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";


import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { HighLightCardDirective } from './high-light-card.directive';
import { DisplayMovieListDirective } from './display-movie-list.directive';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ROUTES } from './app.routes';
import { MenuComponent } from './menu/menu.component';
import { DeveloperComponent } from './developer/developer.component';
import { SkillComponent } from './skill/skill.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { CocktailService } from "./cocktail.service";
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { YodaComponent } from './yoda/yoda.component';
import { QuestionComponent } from './question/question.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    UserProfileComponent,
    MovieCardComponent,
    HighLightCardDirective,
    DisplayMovieListDirective,
    HomeComponent,
    ContactComponent,
    MenuComponent,
    DeveloperComponent,
    SkillComponent,
    SearchMovieComponent,
    CocktailListComponent,
    YodaComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [CocktailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
