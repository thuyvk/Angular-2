import {Component, Input} from '@angular/core';
import {Person} from './person';

@Component({
    selector: 'person-details',
    template:`
    <section *ngIf="person">
        <hr/>
        <h2>Your select: {{person.name}}</h2>
        <p>He weight: {{person.weight}} kg</p>
        <p>He height: {{person.height}} cm</p>
    </section>
    `
})
export class PersonDetailsComponent{
    @Input() person: Person;
}