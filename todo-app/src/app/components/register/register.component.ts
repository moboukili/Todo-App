import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router){ }

  goToVotes($myParam: string = ''): void {
    const navigationDetails: string[] = ['/login'];
    if($myParam.length) {
      navigationDetails.push($myParam);
    }
    alert("Your Register add successfully");
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
