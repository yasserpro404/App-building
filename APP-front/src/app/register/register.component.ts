import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-register',
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  form = {
    surname: null,
    name: null,
    email: null,
    password: null,
    confirmPassword: null,
    userRole: 'freelance'
  };
  constructor() { }
  ngOnInit() { }

}
