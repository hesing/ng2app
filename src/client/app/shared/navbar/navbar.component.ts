import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-navbar',
  templateUrl: 'navbar.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class NavbarComponent {
    constructor(public router: Router){ }
    isActiveRoute(route: string) {
          return this.router.serializeUrl(this.router.urlTree) == this.router.serializeUrl((this.router.createUrlTree([route])));
    } 
}
