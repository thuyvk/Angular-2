import {Injectable} from '@angular/core';
import {Person} from './person';

const PEOPLE: Person[] = [
    {id: 1, name: 'Join', weight: 70, height: 170},
    {id: 2, name: 'Ozawa', weight: 52, height: 160},
    {id: 3, name: 'Smirt', weight: 78, height: 182}
];

@Injectable()
export class PeopleService{
    
    getAll(): Person[]{
        return PEOPLE.map(p => this.clone(p));
    }

    get(id: number){
        return this.clone(PEOPLE.find(p => p.id === id));
    }

    save(person: Person){
        let originalPerson = PEOPLE.find(p=>p.id === person.id);
        if(originalPerson) 
            Object.assign(originalPerson, person);
    }

    private clone(object :any){
        return JSON.parse(JSON.stringify(object));
    }
}

