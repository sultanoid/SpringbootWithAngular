import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { PagesComponent } from './pages/pages.component';
import { SearchComponent } from './pages/search/search.component';
import { HomeComponent } from './shared/components/home/home.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'telcocomponents', pathMatch: 'full' 
  },
  {
    path: '',
    component: SearchComponent,
    // canActivate: [AuthGuard],
  },
  // {
  //   path: 'auth',
  //   loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
