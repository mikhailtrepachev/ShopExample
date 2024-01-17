import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizeGuard } from '../api-authorization/authorize.guard';
import { HomeComponent } from './components/home/home.component';
import { CounterComponent } from './components/counter/counter.component';
import { FetchDataComponent } from './components/fetch-data/fetch-data.component';
import { TodoComponent } from './components/todo/todo.component';
import { TokenComponent } from './components/token/token.component';

export const routes: Routes = [
  { path: '', loadChildren: () => import('@app/modules/promotional/promotional.module').then(m => m.PromotionalModule) },
  { path: 'counter', component: CounterComponent },
  { path: 'fetch-data', component: FetchDataComponent },
  { path: 'todo', component: TodoComponent, canActivate: [AuthorizeGuard] },
  { path: 'token', component: TokenComponent, canActivate: [AuthorizeGuard] },
  {
    path: '',
    //canActivate,
    //component: AuthenticatedUserLayoutComponent
    children: [
      {
        path: 'admin',
        canActivate: [AuthorizeGuard],
        loadChildren: () => import('@app/modules/admin/admin.module').then(m => m.AdminModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
