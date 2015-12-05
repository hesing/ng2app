import {View, Component} from 'angular2/angular2';
import {RouteConfig, Location, AsyncRoute, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';

import {Home} from '../home/home';
import {About} from '../about/about';
// import {Demos} from '../demos/demos';

declare var System: any;
class ComponentHelper {
    static LoadComponentAsync(name, path) {
        return System.import(path).then(c => c[name]);
    }
}

@Component({
    selector: 'root',
    templateUrl: './components/root/root.html',
    directives: [ROUTER_DIRECTIVES]
})


@RouteConfig([
	{ path: '/', redirectTo: '/home' },
	{ path: '/home', component: Home, as: 'Home' },
	{ path: '/about', component: About, as: 'About' },
    new AsyncRoute({
        path: '/demos',
        loader: () => ComponentHelper.LoadComponentAsync('Demos', './components/demos/demos'),
        name: 'Demos'
    })
])

export class Root {
	location: Location;

	constructor(location: Location) {
        this.location = location;
    }

    getLinkStyle(path) {

        if (path === this.location.path()) {
            return true;
        }
        else if (path.length > 0) {
            return this.location.path().indexOf(path) > -1;
        }
    }
}
