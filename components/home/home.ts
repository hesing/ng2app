import {Component} from 'angular2/angular2';

import {RouteParams} from 'angular2/router';
import {ROUTER_DIRECTIVES} from 'angular2/router';


@Component({
    selector: 'home',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: './components/home/home.html'
})

export class Home {
    // id: string;
    // constructor(params: RouteParams) {
    //     this.id = params.get('id');
    // }
}