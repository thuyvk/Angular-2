import { Component } from '@angular/core';
import {PeopleService} from './people.service';

@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App: {{title}}</h1>
    <route-outlet></route-outlet>`,
    providers:[PeopleService]
})
export class AppComponent { 
    title: String = 'Hello World !!!';
}
