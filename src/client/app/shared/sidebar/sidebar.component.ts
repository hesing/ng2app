import { Component, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
	selector: 'sidebar',
	templateUrl: 'app/shared/sidebar/sidebar.component.html',
	directives: [ROUTER_DIRECTIVES]
})
export class SidebarComponent {
	@Input() toggled:boolean = false;
	toggledSubMenu: boolean;

	toggleSubMenu(event:any) {
		console.log(event);
		event.preventDefault();
		this.toggledSubMenu = !this.toggledSubMenu;
	}
}
