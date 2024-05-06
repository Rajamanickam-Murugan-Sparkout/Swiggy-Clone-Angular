import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  imageUrl = "assets/swiggy-logo.jpg"
  loginUrl = "assets/HeaderImages/profile-login.png"
  signupUrl = "assets/HeaderImages/profile-signUp.png"
}
