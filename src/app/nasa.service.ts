import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  constructor(private myService: HttpClient) { }

  public getImageOfTheDay(): Observable<string> {
    const APIurl: string = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";
    const obs: Observable<any> = this.myService.get(APIurl);
    const treatment = (paramData: any) => {
      const imageLink: string = paramData.hdurl;
      return imageLink;      
    }
    return obs.pipe(map(treatment));
  }

}

