import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from '../../dashboard/dashboard.component';
import {LoginComponent} from '../../users/login/login.component';


const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'users/login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
