import { Component } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import { Title } from '@angular/platform-browser';
import {filter, map} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jip Derksen | ';

  constructor(private activatedRoute: ActivatedRoute, private titleService: Title, private router: Router) {
      const appTitle = this.titleService.getTitle();
      this.router
      .events.pipe(
          filter(event => event instanceof NavigationEnd),
              map(() => {
              const child = this.activatedRoute.firstChild;
              if (child?.snapshot.data['title']) {
                  return this.title + child.snapshot.data['title'];
              }
              return appTitle;
          })
      ).subscribe((ttl: string) => {
          this.titleService.setTitle(ttl);
      });
  }
}
