import {Person} from './person';

export class PeopleService{
    getAll(): Person[]{
        return [
            {name: 'Join', weight: 70, height: 170},
            {name: 'Ozawa', weight: 52, height: 160},
            {name: 'Smirt', weight: 78, height: 182}
        ]
    }
}