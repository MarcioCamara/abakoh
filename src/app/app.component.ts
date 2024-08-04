import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconsService } from './services/icons.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  icons;
  currentYear = new Date().getFullYear();

  timer = { seconds: 0, minutes: 0, hours: 0, days: 0 };

  constructor(private iconsService: IconsService) {}

  ngOnInit(): void {
    setInterval(() => this.setTimer(), 1000);
    this.icons = this.iconsService.icons;
  }

  setTimer(): void {
    const dateNow = new Date();
    const abakohFoundationDateTime = new Date(2024, 0, 30, 20, 10, 0);

    this.timer.seconds = Math.floor(
      (dateNow.getTime() - abakohFoundationDateTime.getTime()) / 1000
    );
    this.timer.minutes = Math.floor(this.timer.seconds / 60);
    this.timer.hours = Math.floor(this.timer.minutes / 60);
    this.timer.days = Math.floor(this.timer.hours / 24);

    this.timer.hours = this.timer.hours - this.timer.days * 24;
    this.timer.minutes =
      this.timer.minutes - this.timer.days * 24 * 60 - this.timer.hours * 60;
    this.timer.seconds =
      this.timer.seconds -
      this.timer.days * 24 * 60 * 60 -
      this.timer.hours * 60 * 60 -
      this.timer.minutes * 60;
  }
}
