import { Component, OnInit } from '@angular/core';
import { Cocktail } from "../cocktail";
import { CocktailService } from "../cocktail.service";

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {

  public cocktails: Cocktail[] = [];
  private service: CocktailService;

  constructor(paramService: CocktailService) {
    this.service = paramService;
  }

  public ngOnInit(): void {
    this.service.getCocktails().subscribe(
      (paramData: Cocktail[]) => {
        this.cocktails = paramData;
      }
    );
  }

}
