import { Component, Input } from '@angular/core';

@Component({
	selector: 'sidebar',
	templateUrl: 'app/shared/sidebar/sidebar.component.html'
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
