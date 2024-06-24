import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'initial-screen',
    pathMatch: 'full',
  },
  {
    path: 'loading-page',
    loadChildren: () =>
      import('./loading-page/loading-page.module').then(
        (m) => m.LoadingPagePageModule
      ),
  },
  {
    path: 'landing',
    loadChildren: () =>
      import('./landing/landing.module').then((m) => m.LandingPageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'telephone',
    loadChildren: () =>
      import('./telephone/telephone.module').then((m) => m.TelephonePageModule),
  },
  {
    path: 'legal-disclaimer',
    loadChildren: () =>
      import('./legal-disclaimer/legal-disclaimer.module').then(
        (m) => m.LegalDisclaimerPageModule
      ),
  },
  {
    path: 'succes',
    loadChildren: () =>
      import('./succes/succes.module').then((m) => m.SuccesPageModule),
  },
  {
    path: 'initial-screen',
    loadChildren: () =>
      import('./initial-screen/initial-screen.module').then(
        (m) => m.InitialScreenPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
