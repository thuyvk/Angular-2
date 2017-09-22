import {Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {Person} from './person';
import { PeopleService } from './people.service';


@Component({
    selector: 'person-details',
    template:`
    <section *ngIf="person">
        <hr/>
        <h2>Your select: {{person.name}}</h2>
        <p>He weight: {{person.weight}} kg</p>
        <p>He height: {{person.height}} cm</p>
    </section>
    <!--New Button Here-->
    <button (click)="gotoPeoplesList()">Back to peoples list</button>
    `
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
}