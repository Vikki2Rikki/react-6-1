import { createStore } from 'redux';
//import { userReducer } from './user/userReduser';

import { reduser } from './reduser';

export const store = createStore(reduser);

// console.log('state', store.getState());
// store.dispatch({ type: 'createUser', payload: 'Bob' });
// store.dispatch({ type: 'updateAge', payload: '40' });
// console.log('state', store.getState());
