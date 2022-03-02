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
  timeoutId: any;
  timeDiff = 0;

  ngOnInit(): void {
    this.timeDiff = this.targetTime - Date.now();
    this.timeoutId = window.setInterval(() => {

      this.timeDiff = this.targetTime - Date.now();
      if (this.timeDiff <= 1000) {
        clearInterval(this.timeoutId);
        this.due.emit();
      }
    }, 1000);
  }


  get isRed() {
    return Math.floor(this.timeDiff / 1000) <= 5;
  }
}
