import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'financial-app';
  isMenuOpen = false;

  teste(isOpened: boolean)
  {
    console.log(isOpened);
  }
}
