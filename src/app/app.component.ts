import {Component, inject} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {HeaderComponent} from './components/header/header/header.component';
import {filter, map} from 'rxjs/operators';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jip Derksen | ';

  private activatedRoute = inject(ActivatedRoute);
  private titleService = inject(Title);
  private router = inject(Router);

  constructor() {
    const appTitle = this.titleService.getTitle();
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map(() => {
        const child = this.activatedRoute.firstChild;
        const routeTitle = child?.snapshot.data?.['title'];
        return routeTitle ? this.title + routeTitle : appTitle;
      }),
      takeUntilDestroyed()
    ).subscribe(ttl => this.titleService.setTitle(ttl));
  }
}

