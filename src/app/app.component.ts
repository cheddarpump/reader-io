import { Component } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'rio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public themeService: ThemeService) {
    this.themeService.LightThemeObservable.subscribe((lightTheme) => {
      if (!lightTheme) {
        document.documentElement.classList.add('dark-background');
      } else {
        document.documentElement.classList.remove('dark-background');
      }
    });
  }
}
