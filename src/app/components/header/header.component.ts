import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'rio-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {}
  toggleTheme(themeVal: boolean): void {
    this.themeService.toggleTheme(themeVal);
  }
}
