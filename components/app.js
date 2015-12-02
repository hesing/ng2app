var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var http_1 = require('angular2/http');
var angular2_1 = require('angular2/angular2');
var home_1 = require('./home/home');
var about_1 = require('./about/about');
// import {Contact} from './contact/contact';
var router_1 = require('angular2/router');
var App = (function () {
    function App(router, location) {
        this.router = router;
        this.location = location;
        this.routeChanged = false;
        this.router.subscribe(this.onRouteChanged);
    }
    App.prototype.onRouteChanged = function (path) {
        console.log('route changed');
        this.routeChanged = true;
    };
    App.prototype.getLinkStyle = function (path) {
        if (path === this.location.path()) {
            return true;
        }
        else if (path.length > 0) {
            return this.location.path().indexOf(path) > -1;
        }
    };
    App = __decorate([
        angular2_1.Component({
            selector: 'app',
            templateUrl: './app.html',
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.RouteConfig([
            new router_1.Route({ path: '/home', component: home_1.Home, name: 'Home' }),
            new router_1.Route({ path: '/about', component: about_1.About, name: 'About' }),
            //new Route({ path: '/demo/...', component: HomePage, name: 'Demo' })
            new router_1.AsyncRoute({
                path: '/contact',
                loader: function () { return ComponentHelper.LoadComponentAsync('Contact', './components/contact/contact'); },
                name: 'Contact'
            }),
            new router_1.AsyncRoute({
                path: '/demos',
                loader: function () { return ComponentHelper.LoadComponentAsync('Demos', './components/demos/demos'); },
                name: 'Demos'
            })
        ]), 
        __metadata('design:paramtypes', [router_1.Router, router_1.Location])
    ], App);
    return App;
})();
var ComponentHelper = (function () {
    function ComponentHelper() {
    }
    ComponentHelper.LoadComponentAsync = function (name, path) {
        return System.import(path).then(function (c) { return c[name]; });
    };
    return ComponentHelper;
})();
angular2_1.bootstrap(App, [router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS,
    angular2_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })]);
//# sourceMappingURL=app.js.map