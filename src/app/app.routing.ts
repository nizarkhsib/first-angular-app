import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ChildComponent} from './components/child.component';
import { UserComponent } from './components/user.component' ;
import {StudentComponent} from './components/student.component';
import {PageNotFoundComponent} from './components/PageNotFound.component';



const appRoutes : Routes =[
    {
        path:'',
        component: UserComponent
    },
    {
        path:'student',
        component: StudentComponent
    },
    {
        path:'child',
        component: ChildComponent
    },
    {
        path:'**',
        component: PageNotFoundComponent
    },
  
  
  


];

export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);