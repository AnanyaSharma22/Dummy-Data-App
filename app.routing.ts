import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app/app.component'
import { DummydataComponent } from './dummydata/dummydata.component';
import { AddeditdummydataComponent } from './addeditdummydata/addeditdummydata.component';

const appRoutes: Routes = [
    // { path: 'users/login', component:UserComponent },
    { path: 'dummydata', component: DummydataComponent },
    { path: 'adddata', component: AddeditdummydataComponent },
    { path: 'adddata/:id', component: AddeditdummydataComponent },
    // { path: 'users', loadChildren: 'app/user/user.module#UserModule' }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
