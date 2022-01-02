import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss'],
})
export class CountDownComponent implements OnInit {
  constructor() {}

  @Input() targetTime: any;
  @Output() due = new EventEmitter();
  timeOut = Date.now();
  timeoutId: ReturnType<typeof setInterval> | null = null;
  timeDiff = 0;

  showMinutes() {
    const min = Math.floor(this.timeDiff / 60000);
    if (this.timeDiff <= 0) return '00';
    return min.toString().padStart(2, '0');
  }

  showSeconds() {
    const sec = ((this.timeDiff % 60000) / 1000).toFixed(0);
    if (this.timeDiff <= 0) return '00';
    else return sec.toString().padStart(2, '0');
  }

  showRed() {
    return Math.floor(this.timeDiff / 1000) <= 5;
  }

  ngOnInit(): void {
    this.timeoutId = setInterval(() => {
      this.timeOut += 1000;
      this.timeDiff = this.targetTime - this.timeOut;
      if (this.timeDiff <= 0) {
        clearInterval(this.timeoutId as ReturnType<typeof setInterval>);
        this.due.emit();
      }
    }, 1000);
  }
}
