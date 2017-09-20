import {Routes, RouterModule} from '@angular/router';
import {PeopleListComponent} from './people-list.component';
const routes: Routes = [
    {
        path:'persons',
        component: PeopleListComponent
    },
    {
        path:'',
        redirectTo:'/persons',
        pathMatch: 'full'
    }
];

export const routing = RouterModule.forRoot(routes);