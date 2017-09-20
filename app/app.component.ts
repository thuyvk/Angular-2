import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App: {{title}}</h1>
    <people-list>`
})
export class AppComponent { 
    title: String = 'Hello World !!!';
}
