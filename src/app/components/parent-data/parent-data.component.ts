import { Component, OnInit, Input, INJECTOR} from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.scss']
})
export class ParentDataComponent implements OnInit {
  @Input() name = ''
  @Input() sobrenome = ''
  @Input() idade = 0
  @Input() userData!: {email: String, user: String}
  constructor() { }

  ngOnInit(): void {
  }

}
