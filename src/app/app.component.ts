import { Component } from '@angular/core';
import {
  svgNodeFilter,
  tuiDefaultProp,
  TuiDestroyService,
  tuiPx,
  TuiResizeService,
} from '@taiga-ui/cdk';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {
  title = 'portfolioAngular';
}
