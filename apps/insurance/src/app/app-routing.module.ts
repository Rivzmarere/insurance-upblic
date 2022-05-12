import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@insurance/core';
import { DashboardModule } from '@insurance/dashboard';
import { LayoutModule } from '@insurance/layout';
import { ContainerComponent } from '@insurance/layout';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('@insurance/auth').then((a) => a.AuthModule),
  },
  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('@insurance/dashboard').then((a) => a.DashboardModule),
      },
      {
        path: 'payment',
        loadChildren: () =>
          import('@insurance/payments').then((a) => a.PaymentsModule),
      },
      {
        path: 'claim',
        loadChildren: () =>
          import('@insurance/claim').then((a) => a.ClaimModule),
      },
      {
        path: 'insurance',
        loadChildren: () =>
          import('@insurance/add-insurance').then((a) => a.AddInsuranceModule),
      },
      {
        path: 'reports',
        loadChildren: () =>
          import('@insurance/reports').then((a) => a.ReportsModule),
      },
      {
        path: 'customer',
        loadChildren: () =>
          import('@insurance/customer').then((a) => a.CustomerModule),
      },
    ],
    //canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: 'auth' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'top',
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
