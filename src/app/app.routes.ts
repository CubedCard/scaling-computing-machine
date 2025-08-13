import {Routes} from '@angular/router';
import {HomeComponent} from './components/mainpage/home/home.component';
import {AboutComponent} from './components/mainpage/about/about.component';
import {ContactComponent} from './components/mainpage/contact/contact.component';
import {ProjectsComponent} from './components/mainpage/projects/projects.component';
import {PageNotFoundComponent} from './components/error/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent, data: {title: "Home"} },
    { path: 'projects', component: ProjectsComponent, data: {title: "Projects"} },
    { path: 'about', component: AboutComponent, data: {title: "Whoami"} },
    { path: 'contact', component: ContactComponent, data: {title: "Contact"} },
    { path: '**', pathMatch: 'full', component: PageNotFoundComponent, data: {title: "Page Not Found"} }
]
