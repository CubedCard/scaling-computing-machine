import { Component } from '@angular/core';
import {ActivatedRoute, NavigationEnd} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-wesite';

  constructor(private activatedRoute: ActivatedRoute) {
  }
  //
  // ngOnInit() {
  //   const appTitle = this.titleService.getTitle();
  //   this.router
  //     .events.pipe(
  //       filter(event => event instanceof NavigationEnd),
  //       map(() => {
  //         const child = this.activatedRoute.firstChild;
  //         if (child.snapshot.data['title']) {
  //           return child.snapshot.data['title'];
  //         }
  //         return appTitle;
  //       })
  //     ).subscribe((ttl: string) => {
  //       this.titleService.setTitle(ttl);
  //     });
  // }
}
