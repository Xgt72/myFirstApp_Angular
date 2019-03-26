import { Component, OnInit } from '@angular/core';
import { Movie } from './movie-card';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  aventure: Movie = {
    title: "L'Aventure intérieure",
    director: "Joe Dante",
    year: 1987,
    posterImage: "L-aventure-intérieure.jpg"
  };

  back: Movie = {
    title: "Back To The Futur",
    director: "Robert Zemeckis",
    year: 1985,
    posterImage: "BackToTheFutur.jpg"
  };

  brainDead: Movie = {
    title: "Braindead",
    director: "Peter Jackson",
    year: 1992,
    posterImage: "BrainDead.jpg"
  };

  gremlins: Movie = {
    title: "Gremlins",
    director: "Joe Dante",
    year: 1984,
    posterImage: "Gremlins.jpg"
  };

  mononoke: Movie = {
    title: "Princesse Mononoké",
    director: "Hayao Miyazaki",
    year: 1997,
    posterImage: "princess-mononoke.jpg"
  };

  pulpFiction: Movie = {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    posterImage: "PulpFiction.jpg"
  };

  stagate: Movie = {
    title: "Stargate",
    director: "Roland Emmerich",
    year: 1994,
    posterImage: "Stargate.jpg"
  };

  terminator2: Movie = {
    title: "Terminator 2: Judgment Day",
    director: "James Cameron",
    year: 1991,
    posterImage: "Terminator2.jpg"
  };

  movieList: any[] = [this.aventure, this.back, this. brainDead, this.gremlins, this.mononoke, this.pulpFiction, this.stagate, this.terminator2];

  imagePath: string = "../assets/";

  showMovies: boolean = true;
  

  constructor() { }

  ngOnInit() {
  }

}
