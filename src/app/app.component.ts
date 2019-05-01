import { Component } from '@angular/core';
import { NasaService } from './nasa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  public title = 'Xavier website ';
  public imgOfTheDay: string;

  constructor(private myService: NasaService){
    this.imgOfTheDay = "";

    this.myService.getImageOfTheDay().subscribe(
      (paramImage: string) => {
        this.imgOfTheDay = paramImage;
      }
    );
  }
}
