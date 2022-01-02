import { Component, OnInit } from '@angular/core';
import { map, fromEvent } from 'rxjs'

@Component({
  selector: 'app-show-coords',
  templateUrl: './show-coords.component.html',
  styleUrls: ['./show-coords.component.scss']
})
export class ShowCoordsComponent implements OnInit {

  x = 0;
  y = 0;

  constructor() { }

  ngOnInit(): void {
    var event$ = fromEvent(document, 'mousemove').pipe(
      map((ev: any) => {
        return { x: ev.x, y: ev.y }
      })
    )

    event$.subscribe((mousePos) => {
      this.x = mousePos.x
      this.y = mousePos.y
    })
}
}
