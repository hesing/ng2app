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
/// <reference path="./typings/tsd.d.ts" />
var angular2_1 = require('angular2/angular2');
// import {TreeViewDemo} from './components/tree-view/tree-view-demo';
// import {ContactList} from './components/contact-list/contact-list';
// import {BoundTextbox} from './components/bound-textbox/bound-textbox';
// import {Directory} from './components/tree-view/directory';
// import {GridDemo} from './components/grid/grid-demo';
// import {Column} from './components/grid/column';
// import {CoreDirectives} from './components/core-directives/core-directives';
// import {IgnoreBindings} from './components/non-bindable/non-bindable';
// import {GreetingComponent} from './components/greeting/greeting-component';
var http_1 = require('../http/http');
// import {Spreadsheet} from './components/spreadsheet/spreadsheet';
// import {Algorithms} from './components/algorithms/algorithms';
// import {Angular2Host} from './components/react-integration/angular-2-host';
// import {JqueryIntegration} from './components/jquery-integration/jquery-integration';
// import {InputControls} from './components/input-controls/input-controls';
// import {AddressBook} from './components/dependency-injection/address-book';
var address_form_1 = require('../address-form/address-form');
var router_1 = require('angular2/router');
var router_2 = require('angular2/router');
var Demos = (function () {
    function Demos(location) {
        this.location = location;
    }
    Demos.prototype.getLinkStyle = function (path) {
        return this.location.path().indexOf(path) > -1;
    };
    Demos.prototype.canReuse = function (next, prev) { return false; };
    Demos = __decorate([
        angular2_1.Component({
            selector: 'demos',
            templateUrl: './components/demos/demos.html',
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.RouteConfig([
            // new Route({ path: '/spreadsheet', component: Spreadsheet, name: 'Spreadsheet' }),
            // new Route({ path: '/jquery', component: JqueryIntegration, name: 'JqueryIntegration' }),
            // new Route({ path: '/react', component: Angular2Host, name: 'React' }),
            // new Route({ path: '/algorithms', component: Algorithms, name: 'Algorithms' }),
            // new Route({ path: '/address', component: AddressBook, name: 'AddressBook' }),
            new router_1.Route({ path: '/http', component: http_1.HttpSample, name: 'Http' }),
            // new Route({ path: '/treeview', component: TreeViewDemo, name: 'TreeView' }),
            // new Route({ path: '/grid', component: GridDemo, name: 'Grid' }),
            // new Route({ path: '/input', component: InputControls, name: 'Input' }),
            // new Route({ path: '/contact', component: ContactList, name: 'Contact' }),
            // new Route({ path: '/textbox', component: BoundTextbox, name: 'Textbox' }),
            // new Route({ path: '/core', component: CoreDirectives, name: 'Core' }),
            // new Route({ path: '/non-bindable', component: IgnoreBindings, name: 'IgnoreBindings' }),
            // new Route({ path: '/greeting', component: GreetingComponent, name: 'Greeting' }),
            new router_1.Route({ path: '/form', component: address_form_1.AddressForm, name: 'AddressForm' })
        ]), 
        __metadata('design:paramtypes', [router_2.Location])
    ], Demos);
    return Demos;
})();
exports.Demos = Demos;
//# sourceMappingURL=demos.js.map