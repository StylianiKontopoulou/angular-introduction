import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Stella';

  person = {
    givenName: 'Stella',
    surName: 'Kontopoulou',
    age: 23,
    email: 'stellakontopoulou@mail.com'
  }
}
