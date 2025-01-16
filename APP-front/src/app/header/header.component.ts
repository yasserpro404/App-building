import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, RouterLink, MatIconModule, MatButtonModule , CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuActive = false; 
  toggleMenu() {
    this.menuActive = !this.menuActive;
  }
  constructor() { }
  ngOnInit(): void {
  }


}
