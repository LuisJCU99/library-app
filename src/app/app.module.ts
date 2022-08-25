import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { GenresComponent } from './genres/genres.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { BookComponent } from './book/book.component';

const appRoutes:Routes=[
  {path: 'home', component: HomeComponent},
  {path: 'genres', component: GenresComponent},
  {path: 'aboutUs', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'genres/:id', component: GenresComponent},
  { path: '**', redirectTo: '/home' },
  ];

@NgModule({
  declarations: [
    AppComponent,
    GenresComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
