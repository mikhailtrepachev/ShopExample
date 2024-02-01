import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizeGuard } from '../api-authorization/authorize.guard';
import { TokenComponent } from './components/token/token.component';

export const routes: Routes = [
  { path: '', loadChildren: () => import('@app/modules/promotional/promotional.module').then(m => m.PromotionalModule) },
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
      },
      {
        path: 'orders',
        canActivate: [AuthorizeGuard],
        loadChildren: () => import('@app/modules/order/order.module').then(m => m.OrderModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
