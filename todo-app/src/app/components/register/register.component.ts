import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
// variable
show_button: Boolean = false;
show_eye: Boolean = false;

//Function
showPassword() {
  this.show_button = !this.show_button;
  this.show_eye = !this.show_eye;
}

}
