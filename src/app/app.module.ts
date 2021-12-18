import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/mainpage/home/home.component';
import { AboutComponent } from './components/mainpage/about/about.component';
import { ContactComponent } from './components/mainpage/contact/contact.component';
import { ProjectsComponent } from './components/mainpage/projects/projects.component';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/error/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header/header.component';

const appRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home', data: {title: "Jip Derksen | Home"} },
    { path: 'home', component: HomeComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProjectsComponent,
    PageNotFoundComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
