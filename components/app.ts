import {HTTP_PROVIDERS} from 'angular2/http';
import {Component, View, bootstrap, provide} from 'angular2/angular2';
import {Home} from './home/home';
import {About} from './about/about';
// import {Contact} from './contact/contact';
import {ROUTER_DIRECTIVES, RouteConfig, Location, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy, Route, AsyncRoute, Router} from 'angular2/router';
//import {AddressBookTitleService} from './components/dependency-injection/address-book-title-service';

declare var System: any;

@Component({
    selector: 'app',
    templateUrl: './app.html',
    directives: [ ROUTER_DIRECTIVES]
})

@RouteConfig([
	new Route({ path: '/home', component: Home, name: 'Home' }),
	new Route({ path: '/about', component: About, name: 'About' }),
	//new Route({ path: '/demo/...', component: HomePage, name: 'Demo' })
	new AsyncRoute({
		path: '/contact',
		loader: () => ComponentHelper.LoadComponentAsync('Contact', './components/contact/contact'),
		name: 'Contact'
	}),
    new AsyncRoute({
        path: '/demos',
        loader: () => ComponentHelper.LoadComponentAsync('Demos', './components/demos/demos'),
        name: 'Demos'
    })
])

class App{
    router: Router;
    location: Location;
    routeChanged: boolean;

    constructor(router: Router, location: Location) {
        this.router = router;
        this.location = location;
        this.routeChanged = false;
        this.router.subscribe(this.onRouteChanged);
    }

    onRouteChanged(path) {
        console.log('route changed');
        this.routeChanged = true;
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

class ComponentHelper {
    static LoadComponentAsync(name, path) {
        return System.import(path).then(c => c[name]);
    }
}

bootstrap(App, [ROUTER_PROVIDERS, HTTP_PROVIDERS,
	provide(LocationStrategy, { useClass: HashLocationStrategy })]);