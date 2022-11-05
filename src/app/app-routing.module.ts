import { RickMortyComponent } from './rick-morty/rick-morty.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateGuard } from './core/guards/private.guard';
import { PublicGuard } from './core/guards/public.guard';
import { LayoutComponent } from './core/layout/layout.component';
import { DetailMovieComponent } from './detail-movie/detail-movie.component';
import { LoginComponent } from './login/login.component';
import { MovieComponent } from './movie/movie.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: MovieComponent,
      },
      {
        path: 'rickmorty',
        component: RickMortyComponent,
      },
      {
        path: 'detail-movie',
        component: DetailMovieComponent,
      },
    ],
    canActivate: [PrivateGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [PublicGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [PublicGuard],
  },
  {
    path: '**',
    component: NotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
