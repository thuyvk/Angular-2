import {Routes, RouterModule} from '@angular/router';
import {PeopleListComponent} from './people-list.component';
import {PersonDetailsComponent} from './person-detail.component';

const routes: Routes = [
    {
        path:'persons',
        component: PeopleListComponent
    },
    {
        path:'persons/:id',
        component: PersonDetailsComponent
    },
    {
        path:'',
        redirectTo:'/persons',
        pathMatch: 'full'
    }
];

export const routing = RouterModule.forRoot(routes);