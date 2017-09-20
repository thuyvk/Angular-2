import {Component} from '@angular/core';
import {Person} from './person';
import { PeopleService } from './people.service';


@Component({
    selector: 'people-list',
    template: `
    <ul>
        <li *ngFor="let person of people">
        <a href='javascript:;' (click)='selectPerson(person)'>
        {{person.name}}
        </a>
        </li>
    </ul>
    <person-details [person]="selectedPerson"></person-details>
    `,
    providers: [PeopleService]
})

export class PeopleListComponent{
    people: Person[] = [];
    selectedPerson: Person;
    
      // this shorthand syntax automatically creates and
      // initializes a new private member in the class
      constructor(private _peopleService : PeopleService){
        this.people = _peopleService.getAll();
      }

      selectPerson(person: Person){
          this.selectedPerson = person;
      }
}