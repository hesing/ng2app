var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var root_1 = require('./root/root');
angular2_1.bootstrap(root_1.Root, [router_1.ROUTER_PROVIDERS, angular2_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })]);
//# sourceMappingURL=app.js.map