import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from './login-page/login-page.component';
import {DashboardEntryComponent} from './dashboard-entry/dashboard-entry.component';
import {UsersComponent} from './dashboard-entry/users/users.component';
import {DashboardComponent} from './dashboard-entry/dashboard/dashboard.component';

import {SettingsComponent} from './dashboard-entry/settings/settings.component';
import {CreateEmployeComponent} from "./dashboard-entry/gestionEmployes/create-employe/create-employe.component";
import {CreateClientComponent} from "./dashboard-entry/clients/create-client/create-client.component";


const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent
  },
  {
    path: 'dashboard',
    component: DashboardEntryComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
        outlet: 'un',
      },
      {
        path: 'dash-board',
        component: DashboardComponent,
        outlet: 'un',
      },
      {
        path: 'employes',
        component: CreateEmployeComponent,
        outlet: 'un',
      }, {
        path: 'clients',
        component: CreateClientComponent,
        outlet: 'un',
      },
      {
        path: 'users',
        component: UsersComponent,
        outlet: 'un',
      }, {
        path: 'settings',
        component: SettingsComponent,
        outlet: 'un',
      },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
