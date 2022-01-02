import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-time',
  templateUrl: './show-time.component.html',
  styleUrls: ['./show-time.component.scss'],
})
export class ShowTimeComponent implements OnInit {
  time = new Date().toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  });

  isDarkMode = false;
  intervalId: ReturnType<typeof setInterval> | null = null;

  seasonImgSrc = '../../../assets/imgs/' + this.getSeason();

  getSeason() {
    const currMonth = new Date().getMonth() + 1;
    if (currMonth === 12 || currMonth <= 2) {
      return 'winter.png';
    } else if (currMonth > 2 && currMonth <= 5) {
      return 'spring.png';
    } else if (currMonth > 5 && currMonth <= 8) {
      return 'summer.png';
    } else return 'autumn.png';
  }

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.time = new Date().toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
      });
    }, 1000);
  }

  ngOnDestroyed(): void {
    clearInterval(this.intervalId as ReturnType<typeof setInterval>);
  }
}
