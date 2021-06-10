import { Component } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'rio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public themeService: ThemeService) {}
}
