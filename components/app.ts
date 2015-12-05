import {bootstrap, provide} from 'angular2/angular2';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';

import { Root } from './root/root';

bootstrap(Root, [ROUTER_PROVIDERS, provide(LocationStrategy, { useClass: HashLocationStrategy })]);