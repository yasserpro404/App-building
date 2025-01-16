import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form = {
    email: null,
    password: null
  }
  constructor() { }
  ngOnInit() { }

}
