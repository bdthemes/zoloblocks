import { createReduxStore, register } from '@wordpress/data';
import reducer from './reducer';
import * as selectors from './selectors';
import * as actions from './actions';
import * as resolvers from './resolvers';

const store = createReduxStore('zolo/templates/library', {
    reducer,
    selectors,
    actions,
    resolvers,
});

register(store);