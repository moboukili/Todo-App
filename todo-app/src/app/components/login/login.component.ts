import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router){ }

  goToVote($myParam: string = ''): void {
    const navigationDetails: string[] = ['/todos-list'];
    if($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails);
  }

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
