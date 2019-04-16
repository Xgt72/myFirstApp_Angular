import { Injectable } from '@angular/core';
import { Cocktail } from "./cocktail";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  public cocktails: Cocktail[] = [];

  constructor(public myService: HttpClient) { }

  public getCocktails(): Observable<Cocktail[]> {
    const url: string = "../assets/cocktails.json";
    const obs: Observable<any> = this.myService.get(url);
    const treatment = (paramData: any) => {

      let current = null;
      

      for (let i = 0; i < paramData.length; i++) {
        current = paramData[i];

        if (current !== undefined) {
          this.cocktails.push(current);
        } else {
          console.log("error");
        }
      }
      return this.cocktails;
    }
    return obs.pipe(map(treatment));
  }
}
