import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private lightTheme = true;

  public get LightTheme(): boolean {
    return this.lightTheme;
  }

  public toggleTheme(lightTheme: boolean): void {
    this.lightTheme = lightTheme;
  }
}
