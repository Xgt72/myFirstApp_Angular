import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Question } from '../common/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  // public questions: Question[];
  @Input() public id: string;
  @Input() public question: string;
  @Output() public getAnswer: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sendAnswer(id: string, value: boolean): void {
    this.getAnswer.emit(id + " " + value);  
  }

}
