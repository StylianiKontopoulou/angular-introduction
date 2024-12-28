import { Component } from '@angular/core';
import { PersonTableComponent } from './components/person-table/person-table.component';
import { Person } from './shared/interfaces/person';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name: 'Stella';

  person0: Person = {
    givenName: 'Stella',
    surName: 'Kontopoulou',
    age: 23,
    email: 'stellakontopoulou@mail.com',
    address: 'Athens, Greece'
  };

  person1: Person= {
    givenName: 'John',
    surName: 'Doe',
    age: 0x25,
    email: 'john@mail.com',
    address: 'New York, USA'
  };
}
