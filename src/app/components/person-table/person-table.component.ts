import { Component } from '@angular/core';

@Component({
  selector: 'app-person-table',
  standalone: true,
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  person= {
    givenName:'Stella',
    surName:'Kontopoulou',
    age:23,
    email: 'stellakontopoulou@mail.com'
  };
}
