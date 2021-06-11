import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'rio-sticky-bar',
  templateUrl: './sticky-bar.component.html',
  styleUrls: ['./sticky-bar.component.scss'],
})
export class StickyBarComponent implements OnInit {
  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {}

  toggleTheme(themeVal: boolean): void {
    this.themeService.toggleTheme(themeVal);
  }
}
