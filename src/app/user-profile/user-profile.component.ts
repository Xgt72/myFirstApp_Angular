import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  @Input() displayNone: string ="hidden";
  @Output() displayRequest = new EventEmitter<string>();

  User = {
    name: "Doe",
    firstName: "John",
    age: 25,
    quote: "",
    photo: "https://randomuser.me/api/portraits/lego/2.jpg"
  };

  
  constructor() { }

  ngOnInit() {
    
  }

  displayAge() {
    if (this.displayNone == "hidden") {
      this.displayNone = "visible";
    } else {
      this.displayNone = "hidden";
    }
   
    this.displayRequest.emit(this.displayNone);
  }

}
