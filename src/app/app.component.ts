import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userName = 'Joaquim'
  lastName = 'Fleury'
  userIdade = 39
  userData = {
    email: 'joaquimfleury@gmail.com',
    user: 'admin'
  }
  title = 'curso-angular';
}
