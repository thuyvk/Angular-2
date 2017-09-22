import { Component } from '@angular/core';
import {PeopleService} from './people.service';

@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App: {{title}}</h1>
    <router-outlet></router-outlet>`,
    providers:[PeopleService]
})
export class AppComponent { 
    title: String = 'Hello World !!!';
}
