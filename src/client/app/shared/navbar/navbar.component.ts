import { Component, EventEmitter, Output } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: 'app/shared/navbar/navbar.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class NavbarComponent {
	toggled: boolean = true;
	@Output() onToggleSidebar = new EventEmitter();

    toggleSidebar() {
        this.toggled = !this.toggled;
        this.onToggleSidebar.emit(this.toggled);
    }
}
