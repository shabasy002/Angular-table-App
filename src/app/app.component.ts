import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { BrowserModule } from '@angular/platform-browser'


import { CommonModule } from '@angular/common'
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector:'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'table-app';
}
