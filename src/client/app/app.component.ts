import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';

import { AboutComponent } from './about/index';
import { HomeComponent } from './home/index';
import { NavbarComponent, SidebarComponent, NameListService } from './shared/index';

@Component({
  selector: 'sd-app',
  templateUrl: 'app/app.component.html',
  viewProviders: [NameListService],
  directives: [ROUTER_DIRECTIVES, NavbarComponent, SidebarComponent]
})
@Routes([
  {
    path: '/',
    component: HomeComponent
  },
  {
    path: '/about',
    component: AboutComponent
  }
])
export class AppComponent {
  toggled: boolean = true;
  toggleSidebar(toggled: boolean) {
    console.log(toggled + 'from app 1');
    this.toggled = toggled;
  }
}
