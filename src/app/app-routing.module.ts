import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MainComponent} from './main/main.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {BlankComponent} from './blank/blank.component';
import {ForgotPasswordComponent} from './session/forgot-password/forgot-password.component';
import {LockScreenComponent} from './session/lockscreen/lockscreen.component';
import {UserListComponent} from './user-list/user-list.component';
import {RegisterrComponent} from './registerr/registerr.component';
import {LoginnComponent} from './loginn/loginn.component';
import {AuthGuard} from './Services/auth-guard.service';

const appRoutes: Routes = [
    // {path: '', redirectTo: '/loginn', pathMatch: 'full'},
    {path: 'loginn', component: LoginnComponent},
    {path: 'registerr', component: RegisterrComponent},
    {path: 'session/forgot-password', component: ForgotPasswordComponent},
    {path: 'session/lockscreen', component: LockScreenComponent},
    {
        path: '', component: MainComponent, canActivate: [AuthGuard], children:
            [
                {path: 'dashboard', component: DashboardComponent},
                {path: 'userlista', component: UserListComponent},
                {path: 'pages/blank', component: BlankComponent},
                {path: '', component: DashboardComponent}
            ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
    providers: []
})
export class RoutingModule {
}
