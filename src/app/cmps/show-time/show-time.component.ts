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

  seasonImgSrc = '' + this.getSeason();

  getSeason() {
    const currMonth = new Date().getMonth() + 1;
    if (currMonth === 12 || currMonth <= 2) {
      return 'https://res.cloudinary.com/rscloudinary/image/upload/v1646214810/firstAngularApp/winter_zmp5y4.png';
    } else if (currMonth > 2 && currMonth <= 5) {
      return 'https://res.cloudinary.com/rscloudinary/image/upload/v1646214806/firstAngularApp/spring_etkjrx.png';
    } else if (currMonth > 5 && currMonth <= 8) {
      return 'https://res.cloudinary.com/rscloudinary/image/upload/v1646214808/firstAngularApp/summer_wzpjlk.png.png';
    } else
      return 'https://res.cloudinary.com/rscloudinary/image/upload/v1646214804/firstAngularApp/autumn_ana7bl.png';
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
