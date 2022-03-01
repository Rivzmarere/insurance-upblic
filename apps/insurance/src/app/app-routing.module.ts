import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@insurance/core';
const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'home' },
  // { path: 'home', component: HomePage },
  {
    path: 'auth',
    loadChildren: () => import('@insurance/auth').then((a) => a.AuthModule)
  },
  // {
  //   path: 'registration',
  //   loadChildren: () =>
  //     import('@guavapay/registration').then((m) => m.RegistrationModule)
  // },
  {
    // path: '',
    // component: ContainerComponent,
    // children: [
      //{ path: '', pathMatch: 'full', redirectTo: 'account' },
      // {
      //   path: 'dashboard',
      //   loadChildren: () => import('@guavapay-individual-web/dashboard').then(m => m.DashboardModule)
      // },
      // {
      //   path: 'pay',
      //   loadChildren: () => import('@guavapay-individual-web/pay').then(m => m.PayModule)
      // },
      // {
      //   path: 'buy',
      //   loadChildren: () => import('@guavapay-individual-web/buy').then(m => m.BuyModule)
      // },
      // {
      //   path: 'manage',
      //   loadChildren: () => import('@guavapay-individual-web/manage').then(m => m.ManageModule)
      // },
      // {
      //   path: 'profile',
      //   loadChildren: () => import('@guavapay/profile').then(m => m.ProfileModule)
      // }
    // ],
    //canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: 'auth' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'top',
      relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
