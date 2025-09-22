import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MovieCard } from './components/movie-card/movie-card';
import { Header } from './components/header/header';
import { Sidebar } from './components/sidebar/sidebar';
import { Search } from './components/search/search';

@NgModule({
  declarations: [
    App,
    MovieCard,
    Header,
    Sidebar,
    Search
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }
