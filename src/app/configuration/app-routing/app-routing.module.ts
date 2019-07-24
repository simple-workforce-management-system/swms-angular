import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from '../../dashboard/dashboard.component';
import {LoginComponent} from '../../users/login/login.component';
import {AuthGuard} from '../../users/auth/auth.guard';


const routes: Routes = [
  {path: 'test', component: DashboardComponent},
  {path: 'users/login', component: LoginComponent},
  {path: '', component: DashboardComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
