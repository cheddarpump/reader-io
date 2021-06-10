import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private lightTheme = new BehaviorSubject(true);

  public get LightTheme(): boolean {
    return this.lightTheme.getValue();
  }

  public get LightThemeObservable(): Observable<boolean> {
    return this.lightTheme;
  }

  public toggleTheme(lightTheme: boolean): void {
    this.lightTheme.next(lightTheme);
  }
}
