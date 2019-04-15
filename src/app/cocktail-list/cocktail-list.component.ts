import { Component, OnInit } from '@angular/core';
import { Cocktail } from "../cocktail";
import { CocktailService } from "../cocktail.service";

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {

  public cocktails: Cocktail[];

  constructor(paramService: CocktailService) {
    this.cocktails = paramService.getCocktails();
  }

  ngOnInit() {

  }

}
