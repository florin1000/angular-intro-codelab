import { Component } from '@angular/core';

@Component({
  selector: 'ngi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngInventory';
  links = [
    { path: '/home', icon: 'home', label: 'Home' },
    { path: '/movies', icon: 'theaters', label: 'Movies' },
  ];
}
