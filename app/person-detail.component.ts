import {Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {Person} from './person';
import { PeopleService } from './people.service';


@Component({
    selector: 'person-details',
    templateUrl: 'app/person-detail.component.html'
})
export class PersonDetailsComponent implements  OnInit, OnDestroy{
    person: Person;
    sub: any;

    constructor(private peopleService: PeopleService, 
        private activeRoute: ActivatedRoute,
        private router: Router){
    }

    ngOnInit(){
        this.sub = this.activeRoute.params.subscribe(params => {
            let id = Number.parseInt(params['id']);
            this.person = this.peopleService.get(id);
        });
    };

    ngOnDestroy(){
        this.sub.unsubscribe();
    }

    gotoPeoplesList(){
        let link = ['/persons'];
        this.router.navigate(link);
    };

    savePersonDetail(){
        //alert(`saved!!! ${JSON.stringify(this.person)}`);
        this.peopleService.save(this.person);
    };
}