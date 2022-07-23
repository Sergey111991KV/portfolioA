import { Component, OnInit } from '@angular/core';
import { Event, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-ui-kit-page',
  templateUrl: './ui-kit-page.component.html',
  styleUrls: ['./ui-kit-page.component.css']
})
export class UiKitPageComponent implements OnInit {
  public isChildRoute!: boolean;
  constructor(
    private router: Router,
  ) { }

  public ngOnInit(): void {
    this.router.events
      .pipe(filter(this.eventIsNavigationStart))
      .subscribe((evt) => {
        this.isChildRoute = evt.url !== '/pages/ui-kit';
      });
    this.isChildRoute = this.router.url !== '/pages/ui-kit';
  }

  private eventIsNavigationStart(event: Event): event is NavigationStart {
    return event instanceof NavigationStart;
  }

}
