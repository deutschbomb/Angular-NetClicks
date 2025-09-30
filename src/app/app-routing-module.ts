import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogPage } from './pages/catalog-page/catalog-page';
import { MoviePage } from './pages/movie-page/movie-page';
import { NotFound } from './pages/not-found/not-found';
import { MainPage } from './pages/main-page/main-page';

const routes: Routes = [
  {
    path: '',
    component: MainPage
  },
  {
    path: 'search',
    component: CatalogPage
  },
  {
    path: 'movie/:id',
    component: MoviePage
  },
  {
    path: '**',
    component: NotFound
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
