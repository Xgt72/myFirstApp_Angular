import { Component, OnInit } from '@angular/core';
import { Question } from "../common/question";

@Component({
  selector: 'app-yoda',
  templateUrl: './yoda.component.html',
  styleUrls: ['./yoda.component.css']
})
export class YodaComponent implements OnInit {

  public answers: Question[];
  public average: number;
  public questions: Question[];
  private totalPointsOfThisQuestions: number;
  private userPoints: number = 0;
  public quizIsValid: boolean = false;
  public yodaMessage: string;

  constructor() {
    this.answers = [];
  }

  ngOnInit() {
    this.questions = [
      new Question("1", "Aimes-tu les logiciels libres ?", true, 3),
      new Question("2", "La force a-t-elle créé Linux ?", true, 1),
      new Question("3", "Est-ce que le code, c'est la vie ?", true, 2),
      new Question("4", "Prèfères-tu les GUI au CLI ?", false, 3),
      new Question("5", "L'histoire de la force a-t-elle écrite par Git ?", true, 2),
      new Question("6", " La documentation est-elle le meilleur ami de la force ?", true, 2),
      new Question("7", "Penses-tu que tester c'est douter ?", false, 1),
      new Question("8", "Javascript est-il le Java du web ?", false, 1),
      new Question("9", " L'open source se situe dans les Alpes ?", false, 4),
      new Question("10", "Angular est-il une pierre magique ?", false, 1)
    ];



  }

  onGetAnswer($event: string): void {
    let idAndAnswer: string[] = $event.split(" ");
    let id = idAndAnswer[0];
    let userAnswer: boolean;

    if (idAndAnswer[1] == "true") {
      userAnswer = true
    } else {
      userAnswer = false;
    }

    let userScore = 0;

    if (this.questions[Number(id) - 1].answer == userAnswer) {
      userScore = this.questions[Number(id) - 1].score;
    } else {
      userScore = 0;
    }

    let answer = new Question(id, this.questions[Number(id) - 1].title, userAnswer, userScore);
    // add of the answers
    this.answers[Number(id) - 1] = answer;   
  }

  /*
  calculateAverage(points: number, totalPoints: number): number {
    

    return this.average;
  }
  */

  getMyResult(): void {
    // calcul of the total points.
    for (let i = 0; i < this.questions.length; i++) {
      this.totalPointsOfThisQuestions += this.questions[i].score;
    }
    // calcul of the user points.
    for (let i: number = 0; i < this.questions.length; i++) {
      if (this.questions[i].answer === this.answers[i].answer) {
        this.userPoints += this.questions[i].score;
      }
    }

    if (this.userPoints > 12) {
      this.yodaMessage = "Okay young padawan now you feel the dev force !";
    } else {
      this.yodaMessage = "Go and never come back...";
    }

    this.quizIsValid = true;

    
    // average.
    //  this.average = this.calculateAverage(this.userPoints, this.totalPointsOfThisQuestions);
  }
}
