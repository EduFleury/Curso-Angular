import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {
  show: Boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  clicar(){
    this.show = !this.show
  }
}
