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
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent, data: {title: "Home"} },
    { path: 'projects', component: ProjectsComponent, data: {title: "Projects"} },
    { path: 'about', component: AboutComponent, data: {title: "Whoami"} },
    { path: 'contact', component: ContactComponent, data: {title: "Contact"} },
    { path: '**', pathMatch: 'full', component: PageNotFoundComponent, data: {title: "Page Not Found"} }
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
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
