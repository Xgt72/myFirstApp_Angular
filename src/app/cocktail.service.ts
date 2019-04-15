import { Injectable } from '@angular/core';
import { Cocktail } from "./cocktail";

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  private cocktailList: Cocktail[]= [
    new Cocktail("Mojito", 7, "https://cache.marieclaire.fr/data/photo/w1000_ci/54/mojito.jpg"),
    new Cocktail("Punch Exotique", 5, "http://img.over-blog-kiwi.com/0/99/11/05/20150714/ob_6ac121_img-0991.JPG"),
    new Cocktail("Pina Colada", 5.50, "http://mobile-cuisine.com/wp-content/uploads/2012/07/pina-colada1.jpg"),
    new Cocktail("Soupe Angevine", 10, "https://www.atelierdeschefs.com/media/recette-e7517-cocktail-blue-lagoon.jpg")
  ]
  constructor() { }

  getCocktails(): Cocktail[] {
    return this.cocktailList;
  }

}
