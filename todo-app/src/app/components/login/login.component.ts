import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
