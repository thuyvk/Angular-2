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
        return PEOPLE;
    }

    get(id: number){
        return PEOPLE.find(p => p.id == id);
    }
}

