// import { createReduxStore, register } from '@wordpress/data';
// import reducer from './reducer';
// import * as selectors from './selectors';
// import * as actions from './actions';
// import * as resolvers from './resolvers';
// export const STORE_NAME = 'zolo/template-library';

// const store = createReduxStore(STORE_NAME, {
//     reducer,
//     selectors,
//     actions,
//     resolvers,
// });

// register(store);

import { createReduxStore, register, select } from '@wordpress/data';
import reducer from './reducer';
import * as selectors from './selectors';
import * as actions from './actions';
import * as resolvers from './resolvers';
export const STORE_NAME = 'zolo/template-library';

// Check if the store is already registered before creating and registering it
let store;
if (!select(STORE_NAME)) {
    store = createReduxStore(STORE_NAME, {
        reducer,
        selectors,
        actions,
        resolvers,
    });

    register(store);
}

export default store;