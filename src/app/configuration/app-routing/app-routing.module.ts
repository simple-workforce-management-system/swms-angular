import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from '../../dashboard/dashboard.component';
import {LoginComponent} from '../../users/login/login.component';
import {AuthGuard} from '../../users/auth/auth.guard';
import {PageNotFoundComponent} from '../errors/page-not-found/page-not-found.component';


const routes: Routes = [
  {path: 'test', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'users/login', component: LoginComponent},
  {path: '', component: DashboardComponent, pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
