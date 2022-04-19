import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './services/api.service';
import { ThemeService, Theme } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  theme!: Observable<Theme>;

  constructor(
    private themeService: ThemeService,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.theme = this.themeService.mode$;
    // this.apiService.getAllCountries().subscribe((res) => console.log(res));
  }

  toggleTheme() {
    this.themeService.toggleMode();
  }
}
